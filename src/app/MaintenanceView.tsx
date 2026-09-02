"use client"

import React from "react"
import Image from "next/image"
import styles from "./maintenance.module.css"

export default function MaintenanceView() {

  const mail = "concursos@cineyaudiovisual.gob.ec"

  return (
    <div className={styles.container}>
      <main className={styles.card}>
        {/* Header institucional */}
        <div className={styles.header}>
          <div className={styles.logoWrapper}>
            <Image
              src="/images/logos/logo icca.png"
              alt="Logo ICCA"
              width={150}
              height={100}
              className={styles.logoImage}
              priority
            />
          </div>

          <div className={styles.statusBadge}>
            <span className={styles.statusIcon} role="img" aria-label="En construcción">
              🚧
            </span>
            <span>Plataforma en mantenimiento</span>
            <span className={styles.statusIcon} role="img" aria-label="En construcción">
              🚧
            </span>
          </div>
        </div>

        {/* 1. Título principal */}
        <h1 className={styles.title}>Nuestra aplicación CinemaEc se encuentra en desarrollo.</h1>

        {/* 3. Frase descriptiva */}
        <p className={styles.description}>
          El ICCA está trabajando en nuevas funcionalidades y mejoras para CinemaEc. Por el momento no se podrá ingresar a la plataforma. En un par de semanas estaremos de regreso.
        </p>

        {/* 4. Recuadro importante para postulaciones */}
        <section className={styles.importantBox} aria-label="Información para postulantes">
          <div className={styles.importantHeader}>
            <span className={styles.importantIcon} role="img" aria-label="Aviso importante">
              📌
            </span>
            <h2 className={styles.importantTitle}>
              ¿Estás postulando a Movilidad y necesitas tu perfil profesional o el de tu película?
            </h2>
          </div>
          <p className={styles.importantText}>
            Por favor, para no retrasar tu postulación, adjunta una bio-filmografía sencilla en formato libre. Esto no afectará el resultado de tu postulación.
          </p>
        </section>

        {/* 5. Contacto / Soporte */}
        <div className={styles.contactSection}>
          <span className={styles.contactLabel}>
            Si tienes dudas puedes escribirnos al mail:
          </span>
          <a
            href={`mailto:${mail}`}
            className={styles.emailLink}
          >
            <span className={styles.emailIcon}>✉️</span>
            {mail}
          </a>
        </div>

        {/* 6. Nota de tranquilidad para usuarios registrados */}
        <div className={styles.reassuranceBox}>
          <span className={styles.reassuranceIcon} role="img" aria-label="Información segura">
            🔒
          </span>
          <p className={styles.reassuranceText}>
            Si ya eres usuario de CinemaEc no te preocupes, podrás acceder con tus mismas credenciales y tu información aún estará guardada cuando reestablezcamos el servicio.
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Instituto de Cine y Creación Audiovisual (ICCA) · República del Ecuador</p>
      </footer>
    </div>
  )
}
