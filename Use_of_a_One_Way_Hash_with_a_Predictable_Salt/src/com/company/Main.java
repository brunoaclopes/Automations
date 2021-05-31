package com.company;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

public class Main {

    public static void main(String[] args) {
        MessageDigest md5 = null;
        var salt = "test";
        var input = "test";
        try {
            md5 = MessageDigest.getInstance("SHA3-256");
            // Simulate input
            salt = args[0];
            input = args[1];
        } catch (Exception e) {
            // e.printStackTrace();
        }
        md5.update(salt.getBytes(StandardCharsets.UTF_8));
        System.out.println(md5.digest(input.getBytes(StandardCharsets.UTF_8)));
    }
}
