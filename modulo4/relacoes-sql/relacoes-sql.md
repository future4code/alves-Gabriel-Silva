
-- Exercício 1:

CREATE TABLE Rating(  
    id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
) ;

-- a) Uma chave estrangeira serve para indentificar a ligação entre duas tabelas.

-- b): 
INSERT INTO Rating(id, comment, rate, movie_id)
VALUES (
    "001",
    "Muito bom!",
    5,
    "001"
);

-- c) Não me permite fazer isso pois a FOREIGN KEY inserida não existe. 
--    Só é possível adicionar informações relacionadas a chaves estrangeiras que existam. 
INSERT INTO Rating(id, comment, rate, movie_id)
VALUES (
    "0011",
    "Bom.",
    8,
    "004"
);

-- d):
ALTER TABLE Movie DROP COLUMN rating;

-- e) Não é permitido apagar esse filme porque a chave estrangeira da culuna de avaliação está atrelada ao id do filme.
DELETE FROM `Movie` WHERE title = "Deus é Brasileiro";

-- Exercício 2:
CREATE TABLE MovieCaste (
    movie_id VARCHAR(255),
    actor_id VARCHAR(255),
    PRIMARY KEY (movie_id, actor_id) UNIQUE,
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- a) Essa tabela irá receber os ids dos filmes e os ids dos atores que participaram neles.
-- E será possível relacionar cada filme com seus respectivos atores.

-- b):
INSERT INTO `MovieCast`(movie_id, actor_id)
VALUES(
    "004",
    "003"
);

-- c) Não me é permitido criar uma relação onde os valores não existem.
INSERT INTO `MovieCast`(movie_id, actor_id)
VALUES(
    "",
    ""
); 

-- d) Não me permite apagar esse ator pois seu id está relacionado a tabela MovieCast.
DELETE FROM `Actor` WHERE id = "003";

-- Exercício 3:

SELECT * FROM `Movie`
JOIN `Rating` ON movie_id = Rating.movie_id;

-- a) O operador ON está represenatndo uma comparação. Nesse caso específico,
-- está sendo comparado o id do filme com a coluna movie_id da tabela de Rating,
-- se for encontrado valores correspondentes será retornado os filmes e suas respectivas avaliações.

-- b)
SELECT movie_id, title, rate FROM `Movie`
JOIN `Rating`
ON Movie.id = Rating.movie_id;

-- Exercício 4:

-- a) 
SELECT title, movie_id, rate, comment FROM `Movie`
LEFT JOIN `Rating` 
ON movie_id = Movie.id;

-- b) 
SELECT actor_id, movie_id, title FROM `MovieCast`
JOIN `Movie`
ON movie_id = Movie.id;