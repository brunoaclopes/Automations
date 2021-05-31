using System;
using System.CodeDom;

namespace Unsafe_Reflection
{
    class Program
    {
        static void Main()
        {
            var method = Console.ReadLine();
            Type t = typeof(Test);
            var methodInfo = t.GetMethod(method);

            Console.WriteLine(methodInfo != null ? methodInfo.Invoke(null, null) : "\nmethodInfo is null!!\nMethod not found!!");
            Console.ReadKey();
        }
    }

    public class Test
    {
        public Test() { }

        public static string TestMethod()
        {
            return "\nTest was successful!!";
        }
    }
}
