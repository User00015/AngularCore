using System.Reflection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NetCore.AutoRegisterDi;

namespace AngularCore.Extensions
{
    public static class ExtensionMethods
    {
        public static void Inject(this IServiceCollection services,
            IConfiguration configuration)
        {
            services.RegisterAssemblyPublicNonGenericClasses(
                    Assembly.GetExecutingAssembly())
                .Where(c => c.Name.EndsWith("Service"))
                .AsPublicImplementedInterfaces(ServiceLifetime.Scoped);

        }
    }
}
