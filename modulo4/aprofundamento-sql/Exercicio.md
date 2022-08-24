SELECT * FROM `Actor`;

SET SQL_SAFE_UPDATES = 0;

-- Exercício 1:

ALTER TABLE `Actor` ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE `Actor` ADD type VARCHAR(255) DEFAULT "NotDirector";

-- a) o comando ALTER TABLE Actor DROP COLUMN salary apagaria  essa coluna da tabela.

-- b) o comando ALTER TABLE Actor CHANGE gender sex VARCHAR(6) renomearia a coluna de gender para => sex.

-- c)  ALTER TABLE Actor CHANGE gender gender VARCHAR(255) este comando fará permanecer o nome
--  e aumentará a quantidade de caracteres aceitos.

-- d)
ALTER TABLE `Actor` CHANGE gender gender VARCHAR(100);

-- Exercício 2:

-- a)
UPDATE Actor
SET name = "Capitão Jack", birth_date = "1970-04-15", gender = "male"
WHERE id = "003";

--  b) 
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

-- c) 
UPDATE Actor
SET 
name = "Moacyr Franco", 
salary = 1300000,
birth_date = "1985-09-21", 
gender = "male"
WHERE id = "005";

-- d) Não me retornou nenhum erro, simplesmente sou informado que nada foi "afetado/alterada".
UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "111";

-- Exercício 3:

-- a)
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

-- b) 
DELETE FROM Actor WHERE 
gender = "male" AND
salary > 1000000;

-- Exercício 4:

SELECT COUNT(*) FROM Actor;
SELECT COUNT(*) FROM Actor WHERE gender = "female";
SELECT AVG(salary) FROM Actor;

-- a)
SELECT MAX(salary) FROM Actor;

-- b) 
SELECT MIN(salary) FROM Actor;

-- c) 
SELECT COUNT(*) FROM Actor;

-- d) 
SELECT SUM(salary) FROM Actor;

-- testes
SELECT * FROM Actor LIMIT 3;
SELECT * FROM Actor ORDER BY name DESC;
SELECT * FROM Actor ORDER BY name ASC LIMIT 2;
SELECT * FROM Actor WHERE gender = 'female'
ORDER BY name ASC LIMIT 4;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

