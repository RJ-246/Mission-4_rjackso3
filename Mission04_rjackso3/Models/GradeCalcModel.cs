using System;
using System.ComponentModel.DataAnnotations;

namespace Mission04_rjackso3.Models
{
	public class GradeCalcModel
	{
		[Required]
		[Range(0,100)]
        public int Assignments { get; set; }
        [Required]
        [Range(0, 100)]
        public int Group { get; set; }
        [Required]
        [Range(0, 100)]
        public int Quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public int Midterm { get; set; }
        [Required]
        [Range(0, 100)]
        public int FinalExam { get; set; }
        [Required]
        [Range(0, 100)]
        public int Intex { get; set; }

	}
}

