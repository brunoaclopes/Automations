package com.company;

import java.util.Random;

public class Main {
    private static final long SEED = 1234567890;

    public static int generateAccountID() {
        Random random = new Random(SEED);
        return random.nextInt();
    }
}
