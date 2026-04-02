import { Home, FileText, Activity, Settings, Shield } from 'lucide-react';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export function Sidebar({ activeView, setActiveView }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'history', label: 'Historial Clínico', icon: FileText },
    { id: 'surveillance', label: 'Vigilancia Sanitaria', icon: Activity },
    { id: 'security', label: 'Seguridad', icon: Shield },
  ];

  return (
    <div className="w-64 h-full bg-sidebar text-sidebar-foreground flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-sidebar-primary rounded-lg flex items-center justify-center">
            <Activity className="w-6 h-6 text-sidebar-primary-foreground" />
          </div>
          <div>
            <h2 className="text-white text-center">P.V.U.C</h2>
            <p className="text-xs text-sidebar-foreground/70">Menú de Opciones</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveView(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                      : 'text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-8 h-8 bg-sidebar-accent rounded-full flex items-center justify-center">
            <span className="text-sm">CL</span>
          </div>
          <div className="flex-1">
            <p className="text-sm text-sidebar-foreground">Clínica Veterinaria</p>
            <p className="text-xs text-sidebar-foreground/70">ID: CVT-001</p>
          </div>
        </div>
      </div>
    </div>
  );
}
