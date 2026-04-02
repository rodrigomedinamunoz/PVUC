import { Search, CheckCircle, Calendar, MapPin, FileText, Syringe, Scissors } from 'lucide-react';
import { useState } from 'react';

export function ClinicalHistory() {
  const [searchTerm, setSearchTerm] = useState('');

  const patientData = {
    name: 'Max',
    species: 'Canino',
    breed: 'Golden Retriever',
    age: '3 años',
    owner: 'Juan Pérez',
    microchip: 'CHI-9876543210',
    lastVisit: '15 Mar 2026',
  };

  const timeline = [
    {
      date: '15 Mar 2026',
      type: 'Vacunación',
      clinic: 'Clínica VetCenter',
      location: 'Santiago Centro',
      description: 'Vacuna Antirrábica - Dosis anual',
      doctor: 'Dr. Roberto Silva',
      icon: Syringe,
      color: 'bg-green-500',
    },
    {
      date: '12 Feb 2026',
      type: 'Cirugía',
      clinic: 'Hospital Veterinario Sur',
      location: 'La Florida',
      description: 'Esterilización',
      doctor: 'Dra. Carmen López',
      icon: Scissors,
      color: 'bg-purple-500',
    },
    {
      date: '05 Ene 2026',
      type: 'Consulta',
      clinic: 'Clínica VetCenter',
      location: 'Santiago Centro',
      description: 'Control general - Estado saludable',
      doctor: 'Dr. Roberto Silva',
      icon: FileText,
      color: 'bg-blue-500',
    },
    {
      date: '20 Dic 2025',
      type: 'Vacunación',
      clinic: 'Clínica Mascotas Felices',
      location: 'Providencia',
      description: 'Vacuna Séxtuple',
      doctor: 'Dr. Miguel Torres',
      icon: Syringe,
      color: 'bg-green-500',
    },
  ];

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1>Historial Clínico Unificado</h1>
        <p className="text-muted-foreground mt-1">
          Acceso centralizado a datos clínicos territoriales
        </p>
      </div>

      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por microchip o nombre del tutor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
            Buscar
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <CheckCircle className="w-4 h-4 text-green-500" />
          <span>Datos sincronizados con el repositorio central mediante API REST</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="mb-4">Información del Paciente</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Nombre</p>
              <p>{patientData.name}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Especie</p>
              <p>{patientData.species}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Raza</p>
              <p>{patientData.breed}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Edad</p>
              <p>{patientData.age}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Tutor</p>
              <p>{patientData.owner}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Microchip</p>
              <p className="text-primary">{patientData.microchip}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Última Visita</p>
              <p>{patientData.lastVisit}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-card rounded-lg border border-border p-6">
          <h3 className="mb-6">Línea de Tiempo Médica</h3>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
            <div className="space-y-6">
              {timeline.map((event, idx) => {
                const Icon = event.icon;
                return (
                  <div key={idx} className="relative flex gap-4">
                    <div className={`${event.color} w-12 h-12 rounded-full flex items-center justify-center z-10`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 bg-muted rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-sm mb-1">{event.type}</p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {event.date}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm mb-2">{event.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{event.doctor}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {event.clinic} - {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
