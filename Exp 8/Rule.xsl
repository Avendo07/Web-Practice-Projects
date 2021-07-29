<!-- <?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<h1 align="center">Students' Basic Details</h1>
<table border="3" align="center" >
<tr>
	<th>Name</th>
	<th>Branch</th>
	<th>Age</th>
	<th>City</th>
</tr>
	<xsl:for-each select="student/s">
<tr>
	<td><xsl:value-of select="name"/></td>
	<td><xsl:value-of select="branch"/></td>
	<td><xsl:value-of select="age"/></td>
	<td><xsl:value-of select="city"/></td>
</tr>
	</xsl:for-each>
	</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
 -->

 <?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
    <body>
        <h2>Smartphone List</h2>
        <table>
            <tr>
                <th>Name</th>
                <th>Display</th>
                <th>Processor</th>
                <th>GPU</th>
                <th>Cameras</th>
            </tr>
            <xsl:for-each select="smartphones/phones">
                <tr>
                    <td><xsl:value-of select="name"/></td>
                    <td><xsl:value-of select="display"/></td>
                    <td><xsl:value-of select="processor"/></td>
                    <td><xsl:value-of select="gpu"/></td>
                    <td><xsl:value-of select="cameras"/></td>
                </tr>
            </xsl:for-each>
        </table>
    </body> 
</html>
</xsl:template>
</xsl:stylesheet>