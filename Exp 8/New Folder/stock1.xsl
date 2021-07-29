<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<h2><center>Employee List</center></h2>
<table border="1" align="center">
<tr bgcolor="tomato">
<th>Employee Id</th>
<th>First Name</th>
 <th>Last Name</th>
<th>Salary</th>
</tr>
<xsl:for-each select="class/employee">
<tr bgcolor="yellow">
<td><xsl:value-of select="@id"/></td>
<td><xsl:value-of select="firstname"/></td>
<td><xsl:value-of select="lastname"/></td>
<td><xsl:value-of select="salary"/></td>
</tr>
</xsl:for-each>

</table></body> </html>
</xsl:template>
</xsl:stylesheet>






<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body style="font-family:Arial;font-size:12pt;background-color:#EEEEEE">
<h2><center>Employee List</center></h2>
<xsl:for-each select="class/employee">
  <div style="background-color:cyan;color:black;padding:4px">
    <span style="font-weight:bold"><xsl:value-of select="@id"/> - </span>
    <xsl:value-of select="firstname"/>
    </div>
  <div style="margin-left:20px;margin-bottom:1em;font-size:10pt">
    <p>
    <xsl:value-of select="nickname"/>
    <br></br>
    <span style="font-style:italic"> <i>Salary-</i> <xsl:value-of select="salary"/></span>
    </p>
  </div>
</xsl:for-each>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
