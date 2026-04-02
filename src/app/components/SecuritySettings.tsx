import { Shield, Key, Users, CheckCircle, Copy, RefreshCw } from 'lucide-react';
import { useState } from 'react';

export function SecuritySettings() {
  const [apiKey, setApiKey] = useState('sk_prod_a1b2c3d4e5f6g7h8i9j0');

  const roles = [
    {
      name: 'Administrador',
      permissions: ['Gestión completa', 'Configuración de sistema', 'Gestión de usuarios'],
      users: 2,
      color: 'bg-red-500',
    },
    {
      name: 'Veterinario',
      permissions: ['Acceso a historiales', 'Registro de atenciones', 'Modificación de datos clínicos'],
      users: 8,
      color: 'bg-blue-500',
    },
    {
      name: 'Asistente',
      permissions: ['Consulta de historiales', 'Registro de citas', 'Solo lectura'],
      users: 12,
      color: 'bg-green-500',
    },
  ];

  const apiConnections = [
    {
      name: 'Repositorio Central de Datos',
      status: 'Activo',
      lastSync: '2026-04-01 09:30:15',
      endpoint: 'https://api.vetunified.cl/v1/sync',
    },
    {
      name: 'Sistema de Vacunación Nacional',
      status: 'Activo',
      lastSync: '2026-04-01 09:25:42',
      endpoint: 'https://api.minsal.cl/v2/vaccines',
    },
    {
      name: 'Base de Datos de Microchips',
      status: 'Activo',
      lastSync: '2026-04-01 09:28:10',
      endpoint: 'https://api.microchip.cl/v1/registry',
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey);
  };

  const regenerateKey = () => {
    const newKey = 'sk_prod_' + Math.random().toString(36).substring(2, 22);
    setApiKey(newKey);
  };

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1>Seguridad e Interoperabilidad</h1>
        <p className="text-muted-foreground mt-1">
          Gestión de permisos y conexiones de datos
        </p>
      </div>

      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-2 mb-6">
          <Users className="w-5 h-5 text-primary" />
          <h3>Gestión de Roles (RBAC)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roles.map((role, idx) => (
            <div key={idx} className="border border-border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className={`${role.color} w-3 h-3 rounded-full`}></div>
                <h4>{role.name}</h4>
              </div>
              <div className="mb-4">
                <p className="text-xs text-muted-foreground mb-2">Permisos:</p>
                <ul className="space-y-1">
                  {role.permissions.map((perm, pidx) => (
                    <li key={pidx} className="text-sm flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{perm}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">{role.users} usuarios</p>
                <button className="text-primary hover:underline text-sm">
                  Gestionar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-2 mb-6">
          <Key className="w-5 h-5 text-primary" />
          <h3>Token de Seguridad API</h3>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">
              API Key de Producción
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={apiKey}
                readOnly
                className="flex-1 px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none font-mono text-sm"
              />
              <button
                onClick={copyToClipboard}
                className="bg-secondary text-secondary-foreground px-4 py-3 rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <Copy className="w-5 h-5" />
              </button>
              <button
                onClick={regenerateKey}
                className="bg-secondary text-secondary-foreground px-4 py-3 rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Última rotación: 15 Mar 2026
            </p>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-2 mb-6">
          <Shield className="w-5 h-5 text-primary" />
          <h3>Conexiones API Externas</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm text-muted-foreground">Servicio</th>
                <th className="text-left py-3 px-4 text-sm text-muted-foreground">Estado</th>
                <th className="text-left py-3 px-4 text-sm text-muted-foreground">Última Sincronización</th>
                <th className="text-left py-3 px-4 text-sm text-muted-foreground">Endpoint</th>
                <th className="text-left py-3 px-4 text-sm text-muted-foreground">Acción</th>
              </tr>
            </thead>
            <tbody>
              {apiConnections.map((conn, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-muted transition-colors">
                  <td className="py-3 px-4">{conn.name}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600">{conn.status}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{conn.lastSync}</td>
                  <td className="py-3 px-4">
                    <code className="text-xs bg-muted px-2 py-1 rounded">{conn.endpoint}</code>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-primary hover:underline text-sm">
                      Configurar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="mb-4">Registro de Auditoría</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p>Admin modificó permisos de usuario</p>
                <p className="text-xs text-muted-foreground">2026-04-01 08:45:22</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p>Sincronización exitosa con repositorio central</p>
                <p className="text-xs text-muted-foreground">2026-04-01 07:30:15</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p>Intento de acceso fallido desde IP desconocida</p>
                <p className="text-xs text-muted-foreground">2026-03-31 22:18:03</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="mb-4">Configuración de Seguridad</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">Autenticación de dos factores</p>
                <p className="text-xs text-muted-foreground">Requerido para administradores</p>
              </div>
              <div className="w-12 h-6 bg-green-500 rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">Encriptación de datos en tránsito</p>
                <p className="text-xs text-muted-foreground">TLS 1.3</p>
              </div>
              <div className="w-12 h-6 bg-green-500 rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">Auditoría de accesos</p>
                <p className="text-xs text-muted-foreground">Registro completo habilitado</p>
              </div>
              <div className="w-12 h-6 bg-green-500 rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
