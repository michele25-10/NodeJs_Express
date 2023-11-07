DECLARE @count AS int = -1000000000
DECLARE @tabella AS nvarchar(50) = 'customization_traduzioni'
DECLARE @tipo AS int = 1
DECLARE @id_nome AS NVARCHAR(10) = 'id'
DECLARE @id2_nome AS NVARCHAR(10) = 'id_lingua'
DECLARE @id2_valore AS INT = 1
DECLARE @id_valore AS INT 

WHILE @count >= -1000000072
BEGIN
   IF EXISTS(SELECT id FROM customization_traduzioni WHERE id=@count AND id_lingua = @id2_valore)
   BEGIN 
   	SET @id_valore = (SELECT id FROM customization_traduzioni WHERE id=@count AND id_lingua = @id2_valore)
      INSERT INTO scheduler_tabelle_mirror(tabella, id_nome, id_valore, id2_nome, id2_valore, tipo) VALUES (@tabella, @id_nome, @id_valore, @id2_nome, @id2_valore, @tipo)
   END 
   
  SET @count = @count - 1
END

SELECT * FROM scheduler_tabelle_mirror WHERE 1=1
