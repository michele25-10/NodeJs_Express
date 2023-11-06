DECLARE @count AS int = -1000000000
DECLARE @tabella AS nvarchar(50) = "customization_traduzioni"
DECLARE @tipo AS int = 1


WHILE(@count <= -1000000072)
BEGIN
  IF EXISTS(select @id = id, from customization_traduzioni where id=@count AND id_lingua = @id_lingua)
    BEGIN    
      INSERT INTO mirror_common(...........) values (...........)
    END 
  @count = @count + 1; 
END


SELECT * FROM mirror_common WHERE 1=1; 
