using System.ComponentModel.DataAnnotations;

namespace DotNetGrill.Models
    {
    public class Product
        {
        public int ProductId { get; set; }
        [Required]
        [MaxLength(255)]
        public string Name { get; set; }

        public string Description { get; set; }
        [DisplayFormat(DataFormatString = "{0:C}")]
        public decimal Price { get; set; }

        public int Rating { get; set; }

        public string? Photo { get; set; } //? means it is nullable 
        }
    }
