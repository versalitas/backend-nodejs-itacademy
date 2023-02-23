DROP DATABASE IF EXISTS youtube;
CREATE DATABASE youtube;
USE youtube;


CREATE TABLE IF NOT EXISTS user_profile(
	 user_id INT UNSIGNED AUTO_INCREMENT NOT NULL, 
     user_name VARCHAR(45) NOT NULL, 
	 user_email VARCHAR(400) NOT NULL, 
	 user_password VARCHAR(200) NOT NULL, 
	 user_birthdate DATE NOT NULL, 
     user_zipcode VARCHAR(20) NOT NULL, 
     channel_content VARCHAR(45),
     creation_date DATETIME NOT NULL,
     PRIMARY KEY(user_id)
);

CREATE TABLE IF NOT EXISTS subscription(
      subscription_id INT UNSIGNED AUTO_INCREMENT NOT NULL,
      channel_id INT UNSIGNED NOT NULL, 
      subscriber_id INT UNSIGNED NOT NULL, 
	 PRIMARY KEY (subscription_id),
	 FOREIGN KEY (channel_id) REFERENCES user_profile(user_id),
     FOREIGN KEY (subscriber_id) REFERENCES user_profile (user_id)
);

CREATE TABLE IF NOT EXISTS user_video(	
	video_id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    title VARCHAR(200) NOT NULL,
    content_description VARCHAR(450) NOT NULL,
    file_size INT UNSIGNED NOT NULL,
    duration TIME NOT NULL, 
    thumbnail_url VARCHAR(100) NOT NULL,
    reproductions INT UNSIGNED NOT NULL,
    state ENUM('public', 'hidden', 'private'),
    upload_date DATETIME NOT NULL,
    creator_id INT UNSIGNED NOT NULL,
    
PRIMARY KEY (video_id),
    FOREIGN KEY (creator_id) REFERENCES user_profile (user_id)
);


CREATE TABLE IF NOT EXISTS tag (
    tag_id INT UNSIGNED AUTO_INCREMENT NOT NULL, 
    tag_name VARCHAR(45) NOT NULL, 
    PRIMARY KEY (tag_id)
);
    
CREATE TABLE IF NOT EXISTS tagged (
	tagged_id INT UNSIGNED AUTO_INCREMENT NOT NULL, 
    tag_id INT UNSIGNED NOT NULL, 
    video_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (tagged_id),
    FOREIGN KEY (tag_id) REFERENCES tag (tag_id),
	FOREIGN KEY (video_id) REFERENCES user_video (video_id)

);

CREATE TABLE IF NOT EXISTS opinion_video (
	opinion_id INT UNSIGNED AUTO_INCREMENT NOT NULL, 
    opinion ENUM('like', 'dislike'),
    opinion_dat DATETIME NOT NULL, 
    user_id INT UNSIGNED NOT NULL, 
    video_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (opinion_id),
    FOREIGN KEY (user_id) REFERENCES user_profile (user_id),
    FOREIGN KEY (video_id) REFERENCES user_video (video_id)
    
);


CREATE TABLE IF NOT EXISTS playlist(
	playlist_id INT UNSIGNED AUTO_INCREMENT NOT NULL,
	playlist_name VARCHAR(45) NOT NULL,
    creation_date DATETIME NOT NULL,
    state ENUM('public', 'private'),
    user_id INT UNSIGNED NOT NULL,
    PRIMARY KEY(playlist_id),
    FOREIGN KEY(user_id) REFERENCES user_profile (user_id)
    );
    
  
CREATE TABLE IF NOT EXISTS addedtoPlaylist(
    addedtoPlaylist_id INT(11) NOT NULL AUTO_INCREMENT,
    video_id INT UNSIGNED NOT NULL,
    playlist_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (addedtoPlaylist_id),
    FOREIGN KEY (video_id) REFERENCES user_video (video_id),
    FOREIGN KEY (playlist_id) REFERENCES playlist (playlist_id)
);

CREATE TABLE IF NOT EXISTS user_comment(
		comment_id INT UNSIGNED AUTO_INCREMENT NOT NULL,
        user_comment VARCHAR(450) NOT NULL, 
        comment_creation DATETIME NOT NULL, 
        video_id INT UNSIGNED NOT NULL,
        commenter_id INT UNSIGNED NOT NULL,
        PRIMARY KEY(comment_id),
	    FOREIGN KEY(video_id) REFERENCES user_video (video_id),
        FOREIGN KEY (commenter_id) REFERENCES user_profile ( user_id)
);
    
    CREATE TABLE IF NOT EXISTS opinion_comment(
		opinion_id INT UNSIGNED AUTO_INCREMENT NOT NULL, 
		opinion ENUM('like', 'dislike'),
		opinion_dat DATETIME NOT NULL, 
		user_id INT UNSIGNED NOT NULL, 
		comment_id INT UNSIGNED NOT NULL,
        PRIMARY KEY (opinion_id),
		FOREIGN KEY (user_id) REFERENCES user_profile (user_id),
		FOREIGN KEY (comment_id) REFERENCES user_comment (comment_id)
);
    



--
-- inserting values, values need to be amended to changes
-- 
/*
INSERT INTO user_profile (user_id, user_name, user_email, user_password, user_birthdate, user_zipcode)
VALUES (1,'Harley Hauck','samara34@hotmail.com','1234','1966-04-21','88303-0315'),
(2,'Dessie Herzog','jzboncak@swaniawskihermann.com','08df83','1996-03-26','60963-4868'),
(3,'Alda Glover','beffertz@hotmail.com','e0da','1-09-19','76435-8003'),
(4,'Cordell Lebsack','josephine.kirlin@hotmail.com','qwerty','1963-01-01','65757-5366'),
(5,'Trey Reichel MD','odickens@colelangosh.com','i5th15g00den0ugh','2011-06-20','00568-9290'),
(6,'Sigurd Wyman','champlin.sasha@hotmail.com','password','2000-12-23','87395'),
(7,'Hannah Wyman','plin.hannah@hotmail.com','password124','2021-12-23','29395'),
(8,'Heddy Henley','hennypenny@gmailcom','thisisaverysecretpassword','2022-12-23','28995'),
(9,'Hermie Santos','realsantos@gmailcom','thisandthat896','2022-11-23','28995'),
(10,'Elsa Domingo','elsa89@gmailcom','89089ghgy79K','2021-10-03','45995');

INSERT INTO user_channel (channel_id, channel_description, creation_date, creator_id)
VALUES (1,'Minecraft speedrun.','2021-12-13 18:05:36',3),
(2,'Magic tutorials.','2011-09-13 04:59:39',1),
(3,'Gaming ','1985-06-06 01:37:53',4),
(4,'Unboxing toys','2015-03-16 14:02:29',5),
(5,'Point shoe fitter reacts.','1982-02-07 06:53:05',7),
(6,'Amazing facts.','1975-04-13 01:00:05',7),
(7,'Life Hacks','2016-09-20 18:06:44',6),
(8,'MySql tutorial','1997-05-10 08:54:13',2);

INSERT INTO subscription(subscription_id, channel_id, subscriber_id)
VALUES (1,5,7),(2,7,7),(3,8,8),(4,5,8),(5,4,2),(6,5,4),(7,5,4),(8,3,5),(9,8,7),(10,6,3),(11,2,4),(12,7,7),(13,2,2),(14,3,5),(15,3,2),(16,4,6),(17,1,5),(18,2,8),(19,7,1),(20,2,2);

INSERT INTO user_video(video_id, title, content_description, file_size, duration, thumbnail_url, reproductions, state, upload_date, creator_id)
VALUES
(1,'MInecraft.','Amazing speedruns.',32557,'01:37:17','http://www.flatleywilliamson.com/',55876,'hidden','1978-03-02 06:06:38',1),
(2,'Quod .','Optio facere sed incidunt quia quia mollitia sit.',18025,'17:07:43','http://www.terry.com/',270,'hidden','1999-11-19 12:01:50',3),
(3,'Vel quas .','Vel quo amet aut quas.',7,'04:10:15','http://www.goyetteabshire.org/',127245,'private','1978-02-19 12:36:19',2),
(4,'Perspiciatis ut','Consectetur blanditiis labore itaque.',338555,'16:38:10','http://www.handpadberg.net/',3125,'private','1998-12-15 11:44:45',7),
(5,'Optio voluptas .','Voluptatum eos odit error facilis molestias veniam.',68358,'18:58:45','http://schaefer.com/',1,'public','2020-01-22 04:13:29',7),
(6,'Ipsa .','Ipsam consequatur atque mollitia pariatur fugiat ut.',48317857,'03:06:12','http://www.stamm.com/',58944190,'private','1993-11-20 19:15:28',2),
(7,'Voluptatem.','Aut sequi provident culpa id placeat.',793011,'00:47:10','http://hills.com/',7455,'hidden','1999-12-10 04:24:07',7),
(8,'Repellendus.','Et voluptatem itaque sint occaecati sed dolorem.',91,'14:23:25','http://www.lockmanschuppe.com/',98218823,'hidden','2005-04-25 03:48:54',2),
(9,'Blanditiis.','Accusamus dolores quae provident cumque distinctio debitis omnis.',28989,'05:57:43','http://www.schiller.com/',67,'private','1997-09-24 07:31:36',4),
(10,'Iure maxime .','Dolores in nisi sequi distinctio maxime accusantium iste.',489978,'19:36:42','http://emard.net/',582850,'private','1999-02-13 20:00:00',1),
(11,'Dolores .','Ipsa molestiae occaecati harum.',18677763,'23:22:38','http://www.stroman.com/',5,'hidden','2016-02-07 03:11:14',2),
(12,'Labore rerum .','Laboriosam voluptatem rem sed et sunt.',616510961,'00:08:58','http://ryanherzog.biz/',38264068,'hidden','2018-03-09 18:30:30',4),
(13,'Consequuntur .','Asperiores pariatur voluptas id ipsa magni aut tenetur.',58,'23:13:53','http://www.wisozkokuneva.biz/',795634,'public','1981-08-21 04:09:37',8),
(14,'Exercitationem .','Ab labore commodi sint earum soluta assumenda.',76789,'20:02:25','http://sporer.com/',42,'private','1974-02-23 16:38:21',8),
(15,'Voluptatibus .','Non quae vel sapiente excepturi.',99,'08:46:29','http://www.langworthtrantow.com/',49933160,'public','1982-07-03 04:11:35',7),
(16,'Fuga temporibus.','Ut voluptatem dicta sint adipisci repellat quia.',2220,'07:16:10','http://www.jenkins.com/',4047,'hidden','1977-08-13 09:56:41',5),
(17,'Quae dolore .','Est quo nisi dicta placeat neque minima et cum.',801019493,'13:56:32','http://anderson.com/',0,'hidden','2001-08-21 14:08:43',4),
(18,'Illo eius .','Consequatur ab cum deserunt est amet magni.',8858,'18:29:17','http://www.brown.org/',544303609,'private','2002-07-14 09:00:10',8),
(19,'Non ab .','Modi in aut maxime assumenda at quae maiores.',21071,'02:27:07','http://www.bashirianferry.info/',0,'private','1973-05-21 00:55:02',8),
(20,'Odio .','Ratione rerum laudantium facilis totam voluptatem quos quo ut.',44,'01:50:37','http://www.mosciskikoepp.biz/',49,'public','2015-07-02 23:28:54',4),
(21,'Id dolor .','Sit est laborum sint repellendus.',3517,'19:49:20','http://www.lueilwitz.net/',245452876,'public','2007-05-23 10:43:41',7),
(22,'Minus quae .','Asperiores voluptatem quos quod perspiciatis maiores.',78711,'10:05:41','http://www.mraz.net/',6137046,'public','2001-11-07 14:24:26',5),
(23,'Sunt repellat.','Atque quae enim qui quae consequatur quas.',4763456,'03:12:47','http://herman.org/',3,'hidden','1983-07-23 18:55:14',6),
(24,'Libero eius.','Voluptatum nulla non non eaque doloribus.',2785,'18:39:56','http://www.connrunte.com/',63992948,'private','1983-01-26 12:55:30',3),
(25,'Corrupti nihil.','Harum enim quia iste magnam.',719741,'09:52:28','http://www.strosin.com/',543229,'hidden','1989-04-28 23:40:20',6),
(26,'Nesciunt.','Veritatis nulla quia ipsa est dolorum labore.',0,'07:06:39','http://www.waterseichmann.com/',78978,'hidden','2014-11-18 12:29:11',4),
(27,'Exercitationem .','Molestiae voluptas quibusdam quia voluptate perferendis animi.',30,'11:11:15','http://www.sawayn.com/',628842,'public','1994-10-22 17:27:23',3),
(28,'Laudantium.','Aut temporibus praesentium voluptatum .',5,'07:46:45','http://baumbach.com/',307,'public','2017-12-04 11:46:25',8),
(29,'Ipsa esse .','Suscipit voluptatem id mollitiat.',92,'04:16:26','http://grady.info/',1,'private','1991-04-08 03:25:14',8),
(30,'Numquamt.','At sed voluptatem reiciendis .',50,'08:33:40','http://roobmosciski.com/',567710535,'private','2000-02-24 09:34:04',7);


INSERT INTO tag (tag_id, tag_name)
VALUES (1, 'speedrun'), (2, 'gaming'), 
(3, 'tutorial'), (4, 'diy'), (5, 'reaction'), (6, 'magic'), (7, 'manhunt'), (8, 'coding'), (9, 'funfacts');

INSERT INTO tagged (tagged_id, tag_id, video_id)
VALUES
(1,7,7),(2,1,4),(3,9,4),(4,6,8),(5,4,8),
(6,7,1),(7,8,4),(8,3,11),(9,6,4),(10,3,5),
(11,5,8),(12,6,9),(13,4,14),(14,2,4),
(15,9,4),(16,6,2),(17,6,7),(18,8,4),
(19,9,5),(20,6,3);

INSERT INTO opinion_video (opinion_id, opinion, opinion_dat, user_id, video_id)
VALUES
(1,'like','1979-03-04 20:53:33',4,5),
(2,'dislike','2000-05-21 20:08:58',5,19),
(3,'like','1980-11-15 04:48:41',2,9),
(4,'like','1984-11-17 22:51:19',5,9),
(5,'like','1999-10-10 20:29:02',7,8),
(6,'dislike','1979-03-20 11:35:16',4,15),
(7,'like','1998-11-29 17:30:35',5,3),
(8,'like','2011-11-10 18:12:20',3,5),
(9,'like','1994-09-27 04:06:18',7,4),
(10,'like','2008-04-12 17:56:47',8,8),
(11,'dislike','2019-07-26 04:13:40',1,3),
(12,'like','2015-07-30 07:24:56',4,9),
(13,'like','1975-10-10 19:27:17',9,7),
(14,'like','1987-12-04 12:36:38',5,9),
(15,'like','1976-04-21 20:57:29',10,6),
(16,'dislike','2014-11-28 18:35:14',8,16),
(17,'like','1982-10-05 06:22:44',3,7),
(18,'dislike','1971-01-27 19:07:03',8,7),
(19,'like','2004-10-03 21:39:04',3,9),
(20,'like','2008-10-19 05:29:29',7,8);

INSERT INTO playlist (playlist_id, playlist_name, creation_date, state, user_id)
    VALUES (1,'non','1971-08-15 08:40:31','private',3),
    (2,'asperiores','1994-06-28 07:52:04','private',1),
    (3,'quod','2019-01-13 10:02:18','public',9),
    (4,'nemo','2016-04-10 05:46:33','public',9),
    (5,'quod','2014-04-07 03:40:58','private',1),
    (6,'ipsa','2008-01-07 02:13:19','private',7),
    (7,'illo','1981-02-05 20:58:56','public',10),
    (8,'molestias','1998-08-02 06:38:30','public',5),
    (9,'libero','1995-09-10 12:35:28','public',1),
    (10,'provident','1979-10-29 16:05:33','private',9),
    (11,'ut','2020-10-17 13:36:16','public',9),
    (12,'magnam','2019-02-23 01:33:19','private',2),
    (13,'officia','2002-08-18 00:36:45','private',10),
    (14,'animi','1985-11-27 09:52:52','private',4),
    (15,'quis','1978-12-29 14:28:28','private',10),
    (16,'sunt','1974-02-22 03:47:07','public',10),
    (17,'ducimus','1977-06-15 16:27:19','private',7),
    (18,'qui','2015-02-23 20:12:32','private',6),
    (19,'inventore','1975-01-27 17:16:51','private',8),
    (20,'quia','2021-03-26 19:07:12','private',2);
    
    INSERT INTO addedtoPlaylist(addedtoPlaylist_id, video_id, playlist_id)
VALUES (1,2,2),(2,2,5),(3,6,14),(4,4,8),(5,2,7),(6,7,1),(7,6,7),(8,9,5),(9,7,14),
(10,1,4),(11,6,6),(12,9,2),(13,8,6),(14,4,3),(15,3,7),(16,7,6),(17,14,7),(18,7,2),
(19,1,4),(20,2,8),(21,12,6),(22,2,14),(23,8,6),(24,2,15),(25,5,4),(26,2,2),(27,3,8),
(28,4,6),(29,1,9),(30,4,5),(31,1,4),(32,7,4),(33,3,9),(34,1,4),(35,11,14),(36,1,14),
(37,1,7),(38,8,4),(39,4,7),(40,7,5),(41,1,7),(42,2,3),(43,14,1),(44,5,14),(45,9,14),
(46,12,3),(47,9,11),(48,18,9),(49,13,4),(50,4,8);


INSERT INTO user_comment (comment_id, user_comment, comment_creation, video_id, commenter_id)
    VALUES (1,'Saepe nihil quo minima quibusdam impedit.','1972-12-21 13:37:45',7,2),
    (2,'Autem ab perspiciatis et in quibusdam praesentium.','1977-07-14 12:03:32',3,1),
    (3,'Excepturi odit ipsum maiores reprehenderit error veritatis.','2013-03-21 14:20:20',5,10),
    (4,'Iure ducimus ipsum quam sequi.','1991-09-20 00:44:57',15,5),
    (5,'Rem harum quo velit.','2021-04-14 01:58:28',8,8),
    (6,'Id occaecati provident et tempora.','2001-06-13 00:13:28',3,6),
    (7,'Doloremque quos accusantium praesentium commodi dolores qui.','2020-04-24 19:01:05',4,1),
    (8,'Voluptatem molestiae reiciendis saepe qui est quis quae sint.','1988-05-05 20:43:11',6,3),
    (9,'Non voluptates eos nihil.','1984-11-23 19:44:10',1,6),
    (10,'Voluptatem dicta numquam aliquam et qui.','1979-05-14 20:14:21',9,7),
    (11,'Mollitia occaecati in enim velit ut.','1978-06-16 20:24:40',4,6),
    (12,'Aut non ad amet ea autem quaerat debitis doloremque.','2005-03-04 13:02:59',2,2),
    (13,'Et qui voluptatem explicabo vel omnis libero.','2017-01-23 01:40:17',19,10),
    (14,'Quo iure incidunt quos quidem omnis quam illum.','2010-08-15 19:24:04',7,1),
    (15,'Molestias dolor veniam non sunt tempore autem iusto.','2015-11-20 16:48:29',8,7),
    (16,'Quia facere accusantium doloribus laudantium et sed.','2005-03-30 12:21:08',9,4),
    (17,'Eos voluptates est sunt dolores in facere.','1979-01-06 19:03:58',10,8),
    (18,'Perferendis praesentium rerum et alias inventore nihil quasi.','1975-06-14 15:12:47',2,4),
    (19,'Velit et tempore vel molestias nostrum est excepturi.','1970-07-12 21:56:46',3,1),
    (20,'Fugit quaerat voluptatum in enim occaecati.','1997-11-13 18:07:42',1,2),
    (21,'Nemo laboriosam iste quo omnis natus ea.','1989-12-29 13:56:58',1,1),
    (22,'Repellat facilis ut aut a nostrum reprehenderit laudantium.','2001-12-04 08:20:20',7,2),
    (23,'Quod similique aut cum ratione et harum cupiditate.','1985-07-11 20:17:39',1,7),
    (24,'Modi omnis adipisci optio aut.','1986-07-04 22:44:39',2,6),
    (25,'A molestiae quam asperiores.','2017-11-10 23:00:38',5,2),
    (26,'Ea minus blanditiis voluptas commodi earum id autem.','1984-10-29 18:34:19',8,2),
    (27,'Voluptatem provident recusandae id vel aut eos.','1993-09-02 05:17:59',8,9),
    (28,'Expedita numquam earum reprehenderit laboriosam inventore.','1986-03-18 16:21:53',9,7),
    (29,'Consequatur et quisquam placeat voluptas.','1995-05-31 00:37:28',9,2),
    (30,'Iure hic consectetur nihil.','1981-03-09 02:02:56',1,2);
    
    INSERT INTO opinion_comment (opinion_id, opinion, opinion_dat, user_id, comment_id)
VALUES
(1,'like','2010-10-20 20:31:41',2,8),
(2,'dislike','2021-07-31 02:50:09',7,2),
(3,'dislike','2014-07-28 11:55:04',3,2),
(4,'like','2005-12-20 03:45:29',4,2),
(5,'like','2017-06-24 00:24:59',4,7),
(6,'dislike','1995-12-04 15:51:43',1,8),
(7,'like','1990-07-29 03:03:09',2,1),
(8,'like','2021-09-13 06:09:29',3,3),
(9,'like','2014-06-11 01:46:18',7,4),
(10,'like','1974-04-28 05:15:52',4,1),
(11,'like','1988-08-27 06:15:04',8,3),
(12,'dislike','1990-05-14 00:53:02',5,2),
(13,'dislike','1990-07-26 00:14:05',2,2),
(14,'dislike','1978-01-20 20:14:40',2,8),
(15,'like','1986-09-29 04:46:24',7,7),
(16,'like','2003-02-13 21:26:42',8,8),
(17,'dislike','1997-06-12 23:40:59',9,9),
(18,'dislike','1979-02-13 19:55:49',8,5),
(19,'like','1998-02-23 23:29:28',7,7),
(20,'like','2000-11-02 16:15:58',7,6),
(21,'dislike','2018-06-10 03:20:33',2,2),
(22,'dislike','2010-05-26 09:44:32',5,6),
(23,'like','2021-08-28 10:20:14',6,7),
(24,'dislike','2020-05-02 00:13:37',7,1),
(25,'dislike','2018-07-07 23:31:34',1,8),
(26,'like','1971-07-05 05:37:07',5,8),
(27,'like','1989-11-11 17:55:02',7,7),
(28,'dislike','1998-11-23 02:58:06',8,6),
(29,'like','1986-12-17 17:47:04',8,3),
(30,'dislike','1997-04-16 09:19:05',6,5); */
