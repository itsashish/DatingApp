using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options){}
        public DbSet<value> Values { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Photo> Photos { get; set; }
    }
}