package com.company;

import org.apache.commons.lang.StringEscapeUtils;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Main {

    public static void main(String[] args) {

    }

    public static void XSSExample(Statement stmt) throws SQLException {
        ResultSet rs;

        rs = stmt.executeQuery("SELECT * FROM Customers WHERE UserName = Mickey");
        String lastNames = "";
        while (rs.next()) {
            lastNames += rs.getString("Lname");
        }
        System.out.print("Mickey last names are: " + StringEscapeUtils.escapeJavaScript(lastNames) + " ");
    }
}
