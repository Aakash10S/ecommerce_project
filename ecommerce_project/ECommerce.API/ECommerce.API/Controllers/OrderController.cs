using ECommerce.API.Data;
using ECommerce.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ECommerce.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly AppDbContext _context;

        public OrderController(AppDbContext context)
        {
            _context = context;
        }

        // PLACE ORDER
        [HttpPost]
        public async Task<IActionResult> PlaceOrder(Order order)
        {
            order.OrderDate = DateTime.Now;

            _context.Orders.Add(order);

            await _context.SaveChangesAsync();

            return Ok(new
            {
                message = "Order placed successfully",
                orderId = order.Id
            });
        }

        // GET ORDERS
        [HttpGet]
        public async Task<IActionResult> GetOrders()
        {
            var orders = await _context.Orders.ToListAsync();

            return Ok(orders);
        }
    }
}
