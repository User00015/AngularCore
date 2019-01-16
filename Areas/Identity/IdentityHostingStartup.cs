using System;
using AngularCore.Areas.Identity.Data;
using AngularCore.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

[assembly: HostingStartup(typeof(AngularCore.Areas.Identity.IdentityHostingStartup))]
namespace AngularCore.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
                services.AddDbContext<AngularCoreContext>(options =>
                    options.UseSqlite(
                        context.Configuration.GetConnectionString("AngularCoreContextConnection")));

                services.AddDefaultIdentity<User>()
                    .AddEntityFrameworkStores<AngularCoreContext>();
            });
        }
    }
}