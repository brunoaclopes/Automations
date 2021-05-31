using System.Text.RegularExpressions;

namespace ReDoS
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = args[0];
            Regex regex = new Regex("^(([a-z])+.)+[A-Z]([a-z])+$");
            Match match = regex.Match(input);
        }
    }
}
