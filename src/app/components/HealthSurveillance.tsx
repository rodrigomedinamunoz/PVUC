import { MapPin, TrendingUp, AlertCircle, Download } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

export function HealthSurveillance() {
  const vaccinationData = [
    { comuna: 'Santiago Centro', cobertura: 85 },
    { comuna: 'Providencia', cobertura: 92 },
    { comuna: 'Las Condes', cobertura: 88 },
    { comuna: 'La Florida', cobertura: 78 },
    { comuna: 'Maipú', cobertura: 81 },
    { comuna: 'Ñuñoa', cobertura: 90 },
  ];

  const pathologyData = [
    { name: 'Parvovirus', value: 35, color: '#ef4444' },
    { name: 'Rabia', value: 8, color: '#dc2626' },
    { name: 'Leptospirosis', value: 15, color: '#f97316' },
    { name: 'Moquillo', value: 22, color: '#f59e0b' },
    { name: 'Otros', value: 20, color: '#3b82f6' },
  ];

  const hotspots = [
    { comuna: 'Santiago Centro', patologia: 'Parvovirus', casos: 12, tendencia: 'aumento' },
    { comuna: 'Providencia', patologia: 'Rabia', casos: 3, tendencia: 'crítico' },
    { comuna: 'La Florida', patologia: 'Leptospirosis', casos: 8, tendencia: 'estable' },
    { comuna: 'Maipú', patologia: 'Moquillo', casos: 6, tendencia: 'aumento' },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Vigilancia Sanitaria</h1>
          <p className="text-muted-foreground mt-1">
            Análisis territorial de salud pública animal
          </p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Download className="w-4 h-4" />
          Exportar Reporte
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="mb-4">Cobertura de Vacunación por Comuna</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={vaccinationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="comuna" tick={{ fontSize: 12 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="cobertura" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            Porcentaje de población animal vacunada
          </p>
        </div>

        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="mb-4">Distribución de Patologías Detectadas</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pathologyData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pathologyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            Casos reportados en los últimos 30 días
          </p>
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-primary" />
          <h3>Zonas de Alto Riesgo (Hotspots)</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm text-muted-foreground">Comuna</th>
                <th className="text-left py-3 px-4 text-sm text-muted-foreground">Patología</th>
                <th className="text-left py-3 px-4 text-sm text-muted-foreground">Casos Activos</th>
                <th className="text-left py-3 px-4 text-sm text-muted-foreground">Tendencia</th>
                <th className="text-left py-3 px-4 text-sm text-muted-foreground">Acción</th>
              </tr>
            </thead>
            <tbody>
              {hotspots.map((spot, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-muted transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{spot.comuna}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">{spot.patologia}</td>
                  <td className="py-3 px-4">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                      {spot.casos}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1">
                      {spot.tendencia === 'crítico' && (
                        <>
                          <AlertCircle className="w-4 h-4 text-red-500" />
                          <span className="text-red-500 text-sm">Crítico</span>
                        </>
                      )}
                      {spot.tendencia === 'aumento' && (
                        <>
                          <TrendingUp className="w-4 h-4 text-amber-500" />
                          <span className="text-amber-500 text-sm">En aumento</span>
                        </>
                      )}
                      {spot.tendencia === 'estable' && (
                        <span className="text-green-500 text-sm">Estable</span>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-primary hover:underline text-sm">
                      Ver Detalles
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-lg border border-border p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl">156</p>
              <p className="text-sm text-muted-foreground">Casos Totales</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-lg border border-border p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl">12</p>
              <p className="text-sm text-muted-foreground">Comunas Monitoreadas</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-lg border border-border p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <p className="text-2xl">4</p>
              <p className="text-sm text-muted-foreground">Alertas Activas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
