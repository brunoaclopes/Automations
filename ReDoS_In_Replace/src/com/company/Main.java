package com.company;
import org.apache.commons.lang3.StringUtils;
public class Main {

    public static void doRegexes(String str, String re) {
        String tempstr = str;

        tempstr.replaceFirst(re,"");
        tempstr = str;
        tempstr.replaceAll(re,"");
        tempstr = str;
        tempstr.split(re);


        StringUtils.replaceFirst(tempstr, re,"");
        tempstr = str;
        StringUtils.replaceAll(tempstr, re,"");
        tempstr = str;
        StringUtils.overlay(tempstr, re);
    }

    public static void main(String[] args) {
        String re = "^(([a-z])+.)+[A-Z]([a-z])+$";
        String str = args[1];

        doRegexes(str, re);
    }
}
