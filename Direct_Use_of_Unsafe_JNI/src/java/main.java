package src.java;

class Echo {

    public native void runEcho(String n);

    static {
        System.loadLibrary("Echo");
    }

    public static void main(String[] args) {
	String n = args[0];
        new Echo().runEcho(n);
    }
}