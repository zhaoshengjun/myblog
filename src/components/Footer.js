import React from "react";

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => (
  <footer className="Footer">
    <div className="Footer-container">
      <div className="Footer-footer">
        <div className="Footer-copy">&copy; {CURRENT_YEAR}</div>
        <div className="Footer-social-container">
          <a
            className="Footer-social"
            href="https://github.com/zhaoshengjun"
            title="Follow me on Github"
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.48.26C4.692.26 0 4.96 0 10.76c0 4.64 3.003 8.574 7.167 9.963.524.096.716-.228.716-.506 0-.25-.01-.91-.014-1.786-2.917.635-3.532-1.407-3.532-1.407-.476-1.213-1.163-1.536-1.163-1.536-.952-.65.072-.638.072-.638 1.05.073 1.605 1.08 1.605 1.08.935 1.606 2.453 1.142 3.05.874.095-.68.366-1.142.665-1.404-2.327-.265-4.773-1.166-4.773-5.19 0-1.146.408-2.083 1.078-2.817-.107-.266-.467-1.333.103-2.78 0 0 .88-.28 2.882 1.077.836-.232 1.732-.35 2.624-.353.89.004 1.787.12 2.624.353 2-1.358 2.88-1.076 2.88-1.076.57 1.446.21 2.513.104 2.78.67.733 1.077 1.67 1.077 2.816 0 4.034-2.45 4.922-4.785 5.182.376.324.71.965.71 1.944 0 1.404-.01 2.536-.01 2.88 0 .28.187.608.72.505 4.16-1.39 7.16-5.323 7.16-9.96 0-5.8-4.693-10.5-10.48-10.5z"
                fillRule="nonzero"
                fill="#92A3B3"
              />
            </svg>
          </a>
          <a
            className="Footer-social"
            href="https://twitter.com/samzhaocn"
            title="Follow me on Twitter"
          >
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.16 0C5.372 0 .68 4.7.68 10.5S5.372 21 11.16 21s10.48-4.7 10.48-10.5S16.948 0 11.16 0zm4.167 8.36c.004.09.006.184.006.277 0 2.847-2.162 6.13-6.117 6.13-1.214 0-2.344-.357-3.296-.968.168.02.34.03.513.03 1.007 0 1.934-.346 2.67-.923-.94-.018-1.735-.64-2.008-1.496.13.026.266.04.404.04.195 0 .385-.027.566-.076-.984-.198-1.725-1.07-1.725-2.113v-.026c.29.162.623.26.975.27-.577-.387-.957-1.046-.957-1.793 0-.394.106-.764.292-1.082 1.06 1.303 2.644 2.16 4.43 2.25-.035-.157-.054-.322-.054-.49 0-1.19.962-2.155 2.15-2.155.618 0 1.177.262 1.57.68.49-.096.95-.275 1.364-.522-.16.504-.5.926-.945 1.193.435-.052.85-.168 1.235-.34-.288.433-.653.812-1.073 1.116z"
                fillRule="nonzero"
                fill="#92A3B3"
              />
            </svg>
          </a>
          <a
            className="Footer-social"
            href="https://www.linkedin.com//in/zhaoshengjun/"
            title="Find me on LinkedIn"
          >
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.84 0C5.052 0 .36 4.7.36 10.5S5.052 21 10.84 21s10.48-4.7 10.48-10.5S16.628 0 10.84 0zM7.946 15.74H5.772v-7h2.174v7zM6.86 7.783c-.698 0-1.26-.565-1.26-1.262 0-.695.562-1.26 1.26-1.26.695 0 1.26.565 1.26 1.26 0 .698-.565 1.263-1.26 1.263zm9.22 7.957h-2.172v-3.404c0-.812-.013-1.856-1.128-1.856-1.13 0-1.302.885-1.302 1.798v3.462h-2.17v-7h2.082v.957h.03c.29-.55.998-1.13 2.055-1.13 2.2 0 2.605 1.45 2.605 3.334v3.84z"
                fillRule="nonzero"
                fill="#92A3B3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
);
