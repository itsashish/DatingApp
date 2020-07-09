using System.Collections.Generic;
using System.Linq;
using DatingApp.API.Models;
using Newtonsoft.Json;

namespace DatingApp.API.Data
{
    public class Seed
    {
        public static void seeduser(DataContext datacontext)
        {
            if(!datacontext.User.Any())
            {
                var userdata = System.IO.File.ReadAllText("Data/UserSeedData.json");
                var users = JsonConvert.DeserializeObject<List<User>>(userdata);

                foreach (var user in users)
                {
                    byte[] passwordHash, passwordsalt;
                    CreatePasswordHash("password", out passwordHash, out passwordsalt);

                    user.PasswordHash = passwordHash;
                    user.PasswordSalt = passwordsalt;
                    user.Name = user.Name.ToLower();
                    datacontext.User.Add(user);
                }
                datacontext.SaveChanges();
            }
        }
        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512()){
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
        
    }
}