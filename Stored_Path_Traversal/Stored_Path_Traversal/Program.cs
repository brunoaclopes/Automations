using System.Data.SqlClient;
using System.IO;

namespace Stored_Path_Traversal
{
    class Program
    {
        static void Main(string[] args)
        {
            using SqlConnection conn = new SqlConnection(args[0]);
            using SqlCommand command = new SqlCommand(args[1], conn);
            
            string fileNum = (string)command.ExecuteScalar();

            string path = @"c:\files\file" + fileNum;
            FileStream f = new FileStream(path, FileMode.Open);
            byte[] output = new byte[10];
            f.Read(output, 0, 10);
        }
    }
}