using System;
using System.Data;

namespace Data_Filter_Injection
{
    class Program
    {
        static void Main(string[] args)
        {
            if (int.TryParse(args[0], out int n))
            {
                string filter = "Col<" + n;
                DataTable dt = new DataTable("MyTable");
                DataColumn column = new DataColumn("Col", typeof(int));
                dt.Columns.Add(column);

                for (int i = 0; i < 5; i++)
                {
                    DataRow row = dt.NewRow();
                    row["Col"] = i;
                    dt.Rows.Add(row);
                }

                DataRow[] rows = dt.Select(filter);
            }
        }
    }
}
