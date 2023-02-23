--USE schema_universidad

---- Retorna un llistat amb el primer cognom, segon cognom i el nom de tots els alumnes. El llistat haurà d'estar ordenat alfabèticament de menor a major pel primer cognom, segon cognom i nom.

SELECT apellido1, apellido2, nombre, fecha_nacimiento FROM persona WHERE persona.tipo = 'alumno' ORDER BY fecha_nacimiento ASC, apellido1, apellido2, nombre;

--Esbrina el nom i els dos cognoms dels alumnes que no han donat d'alta el seu número de telèfon en la base de dades.

SELECT apellido1, apellido2, nombre, telefono FROM persona WHERE telefono IS NULL AND persona.tipo = 'alumno';

-- Retorna el llistat dels alumnes que van néixer en 1999.

SELECT apellido1, apellido2, nombre, fecha_nacimiento FROM persona WHERE fecha_nacimiento LIKE '1999%' AND persona.tipo = 'alumno';

-- Retorna el llistat de professors que no han donat d'alta el seu número de telèfon en la base de dades i a més la seva nif acaba en K.
-- 
SELECT persona.apellido1, persona.apellido2, persona.nombre, persona.nif FROM persona JOIN profesor ON persona.id = profesor.id_profesor WHERE persona.telefono IS NULL AND persona.nif LIKE '%K';
-- ¿o esto mejor??????
SELECT nombre, apellido1, apellido2 FROM persona WHERE tipo = 'profesor' AND telefono IS NULL AND nif LIKE '%K';

-- Retorna el llistat de les assignatures que s'imparteixen en el primer quadrimestre, en el tercer curs del grau que té l'identificador 7.
SELECT nombre FROM asignatura WHERE curso = 3 AND cuatrimestre = 1;

-- Retorna un llistat dels professors juntament amb el nom del departament al qual estan vinculats. El llistat ha de -- Retornar quatre columnes, primer cognom, segon cognom, nom i nom del departament. El resultat estarà ordenat alfabèticament de menor a major pels cognoms i el nom.

SELECT persona.apellido1, persona.apellido2, persona.nombre, departamento.nombre FROM persona JOIN profesor ON persona.id = profesor.id_profesor JOIN departamento ON profesor.id_departamento = departamento.ida.apellido1, persona.apellido2, persona.nombre;

-- Retorna un llistat amb el nom de les assignatures, any d'inici i any de fi del curs escolar de l'alumne amb nif 26902806M.
SELECT asignatura.nombre AS "Enrolled Courses", curso_escolar.anyo_inicio, curso_escolar.anyo_fin FROM asignatura JOIN alumno_se_matricula_asignatura ON asignatura.id = alumno_se_matricula_asignatura.id_asignatura RIGHT JOIN curso_escolar ON alumno_se_matricula_asignatura.id_curso_escolar = curso_escolar.id RIGHT JOIN PERSONA ON alumno_se_matricula_asignatura.id_alumno = persona.id WHERE persona.nif LIKE "26902806M";

-- Retorna un llistat amb el nom de tots els departaments que tenen professors que imparteixen alguna assignatura en el Grau en Enginyeria Informàtica (Pla 2015).
SELECT DISTINCT departamento.nombre FROM departamento RIGHT JOIN profesor ON departamento.id = profesor.id_departamento LEFT JOIN asignatura ON asignatura.id_profesor = profesor.id_profesor RIGHT JOIN grado ON asignatura.id_grado = grado.id WHERE grado.nombre LIKE 'Grado en Ingeniería Informática (Plan 2015)';

-- Retorna un llistat amb tots els alumnes que s'han matriculat en alguna assignatura durant el curs escolar 2018/2019.

SELECT DISTINCT persona.nombre AS "Estudiants matriculats 18/19" FROM persona JOIN alumno_se_matricula_asignatura ON persona.id = alumno_se_matricula_asignatura.id_alumno JOIN curso_escolar ON alumno_se_matricula_asignatura.id_curso_escolar = curso_escolar.id WHERE curso_escolar.anyo_inicio = 18 AND curso_escolar.anyo_fin = 19;


-- Resolgui les 6 següents consultes utilitzant les clàusules LEFT JOIN i RIGHT JOIN.


-- Retorna un llistat amb els noms de tots els professors i els departaments que tenen vinculats. El llistat també ha de mostrar aquells professors que no tenen cap departament associat. El llistat ha de -- Retornar quatre columnes, nom del departament, primer cognom, segon cognom i nom del professor. El resultat estarà ordenat alfabèticament de menor a major pel nom del departament, cognoms i el nom.

SELECT departamento.nombre AS "Departmento", persona.apellido1 , persona.apellido2, persona.nombre FROM departamento RIGHT JOIN profesor ON profesor.id_departamento = departamento.id RIGHT JOIN persona ON persona.id = profesor.id_profesor ORDER BY apellido1, apellido2, nombre;

-- Retorna un llistat amb els professors que no estan associats a un departament.
SELECT persona.apellido1 , persona.apellido2, persona.nombre, departamento.nombre AS "Departmento"  FROM departamento RIGHT JOIN profesor ON profesor.id_departamento = departamento.id RIGHT JOIN persona ON persona.id = profesor.id_profesor WHERE profesor.id_departamento IS NULL ORDER BY apellido1, apellido2, nombre;

-- Retorna un llistat amb els departaments que no tenen professors associats.
SELECT departamento.nombre AS "Departmento" FROM departamento LEFT JOIN profesor ON profesor.id_departamento = departamento.id WHERE id_profesor IS NULL;

-- Retorna un llistat amb els professors que no imparteixen cap assignatura.
SELECT persona.apellido1, persona.apellido2, persona.nombre FROM persona LEFT JOIN asignatura ON persona.id = asignatura.id_profesor WHERE persona.id NOT IN (SELECT asignatura.id_profesor FROM asignatura WHERE asignatura.id_profesor IS NOT NULL);

-- Retorna un llistat amb les assignatures que no tenen un professor assignat.

SELECT asignatura.nombre, profesor.id_profesor FROM asignatura LEFT JOIN profesor USING (id_profesor) WHERE asignatura.id_profesor IS NULL;

-- Retorna un llistat amb tots els departaments que no han impartit assignatures en cap curs escolar.

SELECT DISTINCT departamento.nombre FROM asignatura LEFT JOIN profesor USING (id_profesor) RIGHT JOIN departamento ON departamento.id = profesor.id_departamento WHERE asignatura.id IS NULL;

--Consultes resum:

-- Retorna el nombre total d'alumnes que hi ha.

SELECT COUNT(tipo = 'alumno') AS "Total amount of students" FROM persona;

-- Calcula quants alumnes van néixer en 1999.
SELECT COUNT(nombre) AS 'Students born in 1999' FROM persona WHERE fecha_nacimiento LIKE '1999%' AND tipo = 'alumno';

-- Calcula quants professors hi ha en cada departament. Ha de mostrar dues columnes: nom del departament, i el nombre de professors que hi ha en aquest departament. El resultat només els departaments amb professors associats. Ordenat de major a menor pel nombre de professors.
SELECT departamento.nombre, COUNT(persona.nombre) AS "Employed Professors" FROM profesor JOIN departamento ON departamento.id = profesor.id_departamento JOIN persona ON persona.id = profesor.id_profesor GROUP BY departamento.nombre ORDER BY COUNT(persona.nombre) DESC;

-- Retorna un llistat amb tots els departaments i el nombre de professors que hi ha en cadascun d'ells. Tingui en compte que poden existir departaments que no tenen professors associats. Aquests departaments també han d'aparèixer en el llistat.

SELECT departamento.nombre, COUNT(profesor.id_profesor) AS 'total profesores' FROM departamento LEFT JOIN profesor ON departamento.id = profesor.id_departamento GROUP BY departamento.nombre ORDER BY COUNT('total profesores') DESC;

-- Retorna un llistat amb el nom de tots els graus existents en la base de dades i el nombre d'assignatures que té cadascun. Tingui en compte que poden existir graus que no tenen assignatures associades. Aquests graus també han d'aparèixer en el llistat. El resultat haurà d'estar ordenat de major a menor pel nombre d'assignatures.

SELECT grado.nombre AS 'grado', COUNT(asignatura.id) AS 'asignaturas' FROM grado LEFT JOIN asignatura ON grado.id = asignatura.id_grado GROUP BY grado.nombre ORDER BY COUNT(asignatura.id) DESC; 

-- Retorna un llistat amb el nom de tots els graus existents en la base de dades i el nombre d'assignatures que té cadascun, dels graus que tinguin més de 40 assignatures associades.
SELECT grado.nombre AS 'grado', COUNT(asignatura.id)  AS 'asignaturas' FROM grado RIGHT JOIN asignatura ON grado.id = asignatura.id_grado GROUP BY grado.nombre HAVING (COUNT(asignatura.id) > 40)  ORDER BY COUNT(asignatura.id) DESC; 

-- Retorna un llistat que mostri el nom dels graus i la suma del nombre total de crèdits que hi ha per a cada tipus d'assignatura. El resultat ha de tenir tres columnes: nom del grau, tipus d'assignatura i la suma dels crèdits de totes les assignatures que hi ha d'aquest tipus.
SELECT grado.nombre AS 'nom del grau', asignatura.tipo AS 'nivell', SUM(asignatura.creditos) AS 'crèdits total per assignatura' FROM grado RIGHT JOIN asignatura ON asignatura.id_grado = grado.id GROUP BY grado.nombre, asignatura.tipo;

-- Retorna un llistat que mostri quants alumnes s'han matriculat d'alguna assignatura en cadascun dels cursos escolars. El resultat haurà de mostrar dues columnes, una columna amb l'any d'inici del curs escolar i una altra amb el nombre d'alumnes matriculats.
SELECT curso_escolar.anyo_inicio AS 'Inicio de curso', COUNT(alumno_se_matricula_asignatura.id_alumno) FROM curso_escolar RIGHT JOIN alumno_se_matricula_asignatura ON alumno_se_matricula_asignatura.id_curso_escolar = curso_escolar.id GROUP BY curso_escolar.anyo_inicio;

-- Retorna un llistat amb el nombre d'assignatures que imparteix cada professor. El llistat ha de tenir en compte aquells professors que no imparteixen cap assignatura. El resultat mostrarà cinc columnes: id, nom, primer cognom, segon cognom i nombre d'assignatures. El resultat estarà ordenat de major a menor pel nombre d'assignatures.
SELECT persona.id, persona.nombre, persona.apellido1, persona.apellido2, COUNT(asignatura.id) AS 'total de asignaturas' FROM persona LEFT JOIN profesor ON persona.id = profesor.id_profesor LEFT JOIN asignatura ON profesor.id_profesor = asignatura.id_profesor GROUP BY persona.id ORDER BY 'total de asignaturas' DESC;

-- Retorna totes les dades de l'alumne més jove.
SELECT * FROM persona WHERE tipo LIKE 'alumno' ORDER BY fecha_nacimiento DESC LIMIT 1;

-- Retorna un llistat amb els professors que tenen un departament associat i que no imparteixen cap assignatura.
SELECT departamento.nombre, persona.apellido1, persona.apellido2, persona.nombre, asignatura.id FROM profesor JOIN departamento ON departamento.id = profesor.id_departamento LEFT JOIN asignatura USING (id_profesor) LEFT JOIN persona ON persona.id = profesor.id_profesor WHERE asignatura.id IS NULL;

/* ????????????????????????????????????????????????
??????????????????????????????????????????????????
Es mejor hacer queries con abreviaciones como abajo? Quizá con más experiencia se ve más claro la versión más corta?

SELECT d.nombre, p.apellido1, p.apellido2, p.nombre FROM profesor pr JOIN departamento d ON d.id = pr.id_departamento LEFT JOIN asignatura a USING (id_profesor) LEFT JOIN persona p ON p.id = pr.id_profesor WHERE a.id IS NULL; */

