import './dashboard.css';

// ============================================
// TYPES & INTERFACES
// ============================================

interface StatCard {
  id: string;
  title: string;
  value: string | number;
  icon: string;
  trend: {
    value: string;
    direction: 'up' | 'down';
  };
  type: 'primary' | 'success' | 'warning' | 'secondary';
}

interface Activity {
  id: string;
  title: string;
  description: string;
  time: string;
  icon: string;
}

interface ProgressItem {
  id: string;
  label: string;
  value: number;
  max: number;
}

// ============================================
// DATA
// ============================================

const statsData: StatCard[] = [
  {
    id: 'evaluations',
    title: 'Evaluaciones Completadas',
    value: 1247,
    icon: '📊',
    trend: { value: '+12.5%', direction: 'up' },
    type: 'primary'
  },
  {
    id: 'active-users',
    title: 'Usuarios Activos',
    value: 342,
    icon: '👥',
    trend: { value: '+8.2%', direction: 'up' },
    type: 'success'
  },
  {
    id: 'pending',
    title: 'Pendientes de Revisión',
    value: 28,
    icon: '⏰',
    trend: { value: '-3.1%', direction: 'down' },
    type: 'warning'
  },
  {
    id: 'average-score',
    title: 'Promedio General',
    value: '8.7',
    icon: '⭐',
    trend: { value: '+0.5', direction: 'up' },
    type: 'secondary'
  }
];

const progressData: ProgressItem[] = [
  { id: 'prog1', label: 'Módulo de Capacitación', value: 85, max: 100 },
  { id: 'prog2', label: 'Evaluaciones Técnicas', value: 72, max: 100 },
  { id: 'prog3', label: 'Evaluaciones de Desempeño', value: 94, max: 100 },
  { id: 'prog4', label: 'Retroalimentación', value: 68, max: 100 }
];

const activitiesData: Activity[] = [
  {
    id: 'act1',
    title: 'Nueva evaluación completada',
    description: 'María González completó la evaluación de desempeño Q1',
    time: 'Hace 5 minutos',
    icon: '✅'
  },
  {
    id: 'act2',
    title: 'Reporte generado',
    description: 'Reporte mensual de evaluaciones generado exitosamente',
    time: 'Hace 1 hora',
    icon: '📄'
  },
  {
    id: 'act3',
    title: 'Usuario registrado',
    description: 'Carlos Ramírez se unió al sistema',
    time: 'Hace 2 horas',
    icon: '👤'
  },
  {
    id: 'act4',
    title: 'Actualización del sistema',
    description: 'Se actualizó el módulo de reportes a la versión 2.1',
    time: 'Hace 3 horas',
    icon: '🔄'
  },
  {
    id: 'act5',
    title: 'Meta alcanzada',
    description: 'Se alcanzó el objetivo de 1000 evaluaciones mensuales',
    time: 'Hace 5 horas',
    icon: '🎯'
  }
];

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderHeader(): string {
  return `
    <header class="dashboard-header">
      <div class="header-content">
        <div class="header-title">
          <div class="logo-icon">C</div>
          <div>
            <h1>Sistema de Evaluación y Monitoreo CONI</h1>
            <p>Dashboard de Control y Análisis</p>
          </div>
        </div>
        <div class="header-actions">
          <div class="user-info">
            <div class="user-avatar">AD</div>
            <div class="user-details">
              <div class="user-name">Administrador</div>
              <div class="user-role">Supervisor General</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `;
}

function renderStatCard(stat: StatCard): string {
  return `
    <div class="stat-card ${stat.type} fade-in">
      <div class="stat-header">
        <div class="stat-icon">${stat.icon}</div>
        <div class="stat-trend ${stat.trend.direction}">
          ${stat.trend.direction === 'up' ? '↑' : '↓'} ${stat.trend.value}
        </div>
      </div>
      <div class="stat-body">
        <h3>${stat.value}</h3>
        <p>${stat.title}</p>
      </div>
    </div>
  `;
}

function renderProgressItem(item: ProgressItem): string {
  const percentage = Math.round((item.value / item.max) * 100);
  return `
    <div class="progress-item">
      <div class="progress-header">
        <span class="progress-label">${item.label}</span>
        <span class="progress-value">${percentage}%</span>
      </div>
      <div class="progress-bar-container">
        <div class="progress-bar" style="width: ${percentage}%"></div>
      </div>
    </div>
  `;
}

function renderActivity(activity: Activity): string {
  return `
    <div class="activity-item">
      <div class="activity-icon">${activity.icon}</div>
      <div class="activity-content">
        <div class="activity-title">${activity.title}</div>
        <div class="activity-description">${activity.description}</div>
        <div class="activity-time">${activity.time}</div>
      </div>
    </div>
  `;
}

function renderDashboard(): string {
  return `
    ${renderHeader()}
    
    <div style="text-align: center; padding: 2rem 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); margin: 0; color: white;">
      <h1 style="font-size: 3rem; font-weight: 700; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">HOLA MUNDO</h1>
    </div>
    
    <main class="dashboard-main">
      <!-- Stats Grid -->
      <div class="dashboard-grid">
        ${statsData.map(stat => renderStatCard(stat)).join('')}
      </div>

      <!-- Charts Section -->
      <section class="chart-section">
        <div class="section-header">
          <h2>Análisis y Tendencias</h2>
          <div class="filter-tabs">
            <button class="filter-tab active">Semana</button>
            <button class="filter-tab">Mes</button>
            <button class="filter-tab">Trimestre</button>
            <button class="filter-tab">Año</button>
          </div>
        </div>
        
        <div class="charts-grid">
          <div class="chart-card fade-in fade-in-delay-1">
            <h3>📈 Evaluaciones por Período</h3>
            <div class="chart-placeholder">
              <div style="text-align: center;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">📊</div>
                <div>Gráfico de tendencias</div>
              </div>
            </div>
          </div>
          
          <div class="chart-card fade-in fade-in-delay-2">
            <h3>🎯 Distribución de Calificaciones</h3>
            <div class="chart-placeholder">
              <div style="text-align: center;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">📉</div>
                <div>Gráfico de distribución</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Progress & Activity Section -->
      <section class="chart-section">
        <div class="section-header">
          <h2>Progreso y Actividad</h2>
        </div>
        
        <div class="charts-grid">
          <div class="chart-card fade-in fade-in-delay-3">
            <h3>📊 Progreso por Módulo</h3>
            <div class="progress-list">
              ${progressData.map(item => renderProgressItem(item)).join('')}
            </div>
          </div>
          
          <div class="activity-feed fade-in fade-in-delay-4">
            <h3>🔔 Actividad Reciente</h3>
            <div class="activity-list">
              ${activitiesData.map(activity => renderActivity(activity)).join('')}
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

// ============================================
// INTERACTIVITY
// ============================================

function initializeInteractivity(): void {
  // Filter tabs functionality
  const filterTabs = document.querySelectorAll<HTMLButtonElement>('.filter-tab');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Simulate data refresh
      console.log(`Filtering by: ${tab.textContent}`);
    });
  });

  // Stat cards click interaction
  const statCards = document.querySelectorAll<HTMLDivElement>('.stat-card');
  statCards.forEach(card => {
    card.addEventListener('click', () => {
      const statId = card.querySelector('.stat-body h3')?.textContent;
      console.log(`Clicked stat card: ${statId}`);
      // Here you could open a detailed modal or navigate to a detailed view
    });
  });

  // Animate progress bars on load
  setTimeout(() => {
    const progressBars = document.querySelectorAll<HTMLDivElement>('.progress-bar');
    progressBars.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    });
  }, 300);
}

// ============================================
// REAL-TIME UPDATES SIMULATION
// ============================================

function simulateRealTimeUpdates(): void {
  setInterval(() => {
    // Simulate random stat updates
    const randomStat = statsData[Math.floor(Math.random() * statsData.length)];
    const statElement = document.querySelector(`.stat-card:nth-child(${statsData.indexOf(randomStat) + 1}) .stat-body h3`);

    if (statElement && typeof randomStat.value === 'number') {
      const currentValue = parseInt(statElement.textContent || '0');
      const change = Math.floor(Math.random() * 5) - 2; // Random change between -2 and +2
      const newValue = Math.max(0, currentValue + change);

      statElement.textContent = newValue.toString();

      // Add pulse animation
      statElement.parentElement?.classList.add('fade-in');
      setTimeout(() => {
        statElement.parentElement?.classList.remove('fade-in');
      }, 600);
    }
  }, 5000); // Update every 5 seconds
}

// ============================================
// INITIALIZATION
// ============================================

function init(): void {
  const app = document.querySelector<HTMLDivElement>('#dashboard-app');

  if (!app) {
    throw new Error('No se encontró #dashboard-app');
  }

  // Render the dashboard
  app.innerHTML = renderDashboard();

  // Initialize interactivity
  initializeInteractivity();

  // Start real-time updates simulation
  simulateRealTimeUpdates();

  console.log('✅ Dashboard inicializado correctamente');
}

// Start the application
init();
