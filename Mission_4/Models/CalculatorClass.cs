using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission_4.Models
{
    public class CalculatorClass
    {
        [Range(0, 100, ErrorMessage = "The value must be between 0 and 100.")]
        public int assignment { get; set; }

        [Range(0, 100, ErrorMessage = "The value must be between 0 and 100.")]
        public int group { get; set; }

        [Range(0, 100, ErrorMessage = "The value must be between 0 and 100.")]
        public int quiz { get; set; }

        [Range(0, 100, ErrorMessage = "The value must be between 0 and 100.")]
        public int midterm { get; set; }

        [Range(0, 100, ErrorMessage = "The value must be between 0 and 100.")]
        public int final { get; set; }

        [Range(0, 100, ErrorMessage = "The value must be between 0 and 100.")]  
        public int intex { get; set; }
    }
}
