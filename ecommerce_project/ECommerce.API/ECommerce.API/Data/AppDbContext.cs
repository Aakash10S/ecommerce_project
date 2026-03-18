using Microsoft.EntityFrameworkCore;
using ECommerce.API.Models;

namespace ECommerce.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        // USERS TABLE
        public DbSet<User> Users { get; set; }

        // PRODUCTS TABLE
        public DbSet<Product> Products { get; set; }

        // ORDERS TABLE
        public DbSet<Order> Orders { get; set; }
    }
}
