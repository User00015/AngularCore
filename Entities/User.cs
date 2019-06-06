using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace AngularCore.Entities
{
    public class User : IdentityUser
    {
        public byte[] PasswordSalt { get; set; }
        public new byte[] PasswordHash { get; set; }
        public string Role { get; set; }
    }
}