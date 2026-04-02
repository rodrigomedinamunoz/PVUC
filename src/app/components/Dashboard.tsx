import { Calendar, AlertTriangle, Users, Syringe, Plus, Search, TrendingUp } from 'lucide-react';

export function Dashboard() {
  const stats = [
    { label: 'Atenciones Hoy', value: '24', change: '+12%', icon: Users, color: 'bg-blue-500' },
    { label: 'Próximas Citas', value: '8', change: '3 urgentes', icon: Calendar, color: 'bg-purple-500' },
    { label: 'Vacunaciones', value: '15', change: '+8%', icon: Syringe, color: 'bg-green-500' },
    { label: 'Alertas Sanitarias', value: '2', change: 'Revisar', icon: AlertTriangle, color: 'bg-amber-500' },
  ];

  const upcomingAppointments = [
    { time: '10:00', patient: 'Max', owner: 'Juan Pérez', type: 'Control', chip: 'CHI-9876543210' },
    { time: '11:30', patient: 'Luna', owner: 'María González', type: 'Vacunación', chip: 'CHI-1234567890' },
    { time: '14:00', patient: 'Rocky', owner: 'Carlos Díaz', type: 'Cirugía', chip: 'CHI-5555555555' },
    { time: '15:30', patient: 'Bella', owner: 'Ana Martínez', type: 'Consulta', chip: 'CHI-7777777777' },
  ];

  const recentAlerts = [
    {
      title: 'Aumento de casos de Parvovirus',
      location: 'Comuna: Santiago Centro',
      severity: 'alta',
      date: '01 Abr 2026',
    },
    {
      title: 'Brote de Rabia Detectado',
      location: 'Comuna: Providencia',
      severity: 'crítica',
      date: '28 Mar 2026',
    },
  ];

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1>Panel de Control</h1>
        <p className="text-muted-foreground mt-1">Resumen de actividad y gestión clínica</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
              </div>
              <h3 className="text-3xl mb-1">{stat.value}</h3>
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-xs text-accent">{stat.change}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="mb-4">Acceso Rápido</h3>
          <div className="space-y-3">
            <button className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg flex items-center gap-3 hover:opacity-90 transition-opacity">
              <Plus className="w-5 h-5" />
              <span>Nueva Atención</span>
            </button>
            <button className="w-full bg-secondary text-secondary-foreground px-4 py-3 rounded-lg flex items-center gap-3 hover:bg-secondary/80 transition-colors">
              <Search className="w-5 h-5" />
              <span>Consultar Historial</span>
            </button>
            <button className="w-full bg-secondary text-secondary-foreground px-4 py-3 rounded-lg flex items-center gap-3 hover:bg-secondary/80 transition-colors">
              <Syringe className="w-5 h-5" />
              <span>Registrar Vacunación</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 bg-card rounded-lg border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h3>Próximas Citas</h3>
            <Calendar className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="space-y-3">
            {upcomingAppointments.map((apt, idx) => (
              <div key={idx} className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                <div className="bg-primary text-primary-foreground px-3 py-2 rounded text-sm">
                  {apt.time}
                </div>
                <div className="flex-1">
                  <p className="text-sm">{apt.patient} - {apt.owner}</p>
                  <p className="text-xs text-muted-foreground">{apt.type} • {apt.chip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          <h3>Alertas Sanitarias Territoriales</h3>
        </div>
        <div className="space-y-3">
          {recentAlerts.map((alert, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg border-l-4 ${
                alert.severity === 'crítica'
                  ? 'bg-red-50 border-red-500'
                  : 'bg-amber-50 border-amber-500'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm mb-1">{alert.title}</p>
                  <p className="text-xs text-muted-foreground">{alert.location}</p>
                </div>
                <span className="text-xs text-muted-foreground">{alert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
