namespace Excessive_Data_Exposure.Model
{
    public class Account
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }

        public Account() { }

        public override string ToString()
        {
            return FirstName+LastName+Password;
        }
    }
}
