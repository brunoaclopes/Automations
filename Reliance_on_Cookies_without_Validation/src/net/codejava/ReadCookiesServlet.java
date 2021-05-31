package net.codejava;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.security.AllPermission;
import java.security.Permissions;

@WebServlet("/read_cookies")
public class ReadCookiesServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public ReadCookiesServlet() {
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        var userRole = "nothing";
        var permissions = new Permissions();

        Cookie[] cookies = request.getCookies();

        for (Cookie aCookie : cookies) {
            if (aCookie.getName().equals("role")) {
                userRole = aCookie.getValue();
                permissions.add(getPermission(userRole));
            }
        }

        if(userRole.equals("important")){
            permissions.add(AllPermission());
            response.getWriter().println("This user is important!");
        }
    }

}
