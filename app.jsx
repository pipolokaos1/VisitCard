const { useState, useEffect } = React;

function App() {
  const [stage, setStage] = useState('loading');
  const [progress, setProgress] = useState(0);
  const [logLines, setLogLines] = useState([]);

  
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStage('error');
    }, 2000);

    const timer2 = setTimeout(() => {
      setStage('hacking');
      simulateHackingLog();
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const hackingMessages = [
    '[INFO] Starting penetration test on 727wysi.fun...',
    '[INFO] Scanning open ports using nmap...',
    '[SUCCESS] Open ports found: 80, 443, 22',
    '[INFO] Attempting SSH brute-force attack...',
    '[INFO] Loading password dictionary: rockyou.txt',
    '[ERROR] Failed to authenticate with user: root',
    '[ERROR] Failed to authenticate with user: guest',
    '[ERROR] Failed to authenticate with user: testuser',
    '[WARNING] Starting password dictionary attack...',
    '[WARNING] Detected rate limiting on SSH service',
    '[INFO] Bypassing rate limit using IP spoofing...',
    '[SUCCESS] Spoofing successful — IP rotation activated',
    '[INFO] Resuming password cracking...',
    '[ERROR] Connection refused by server',
    '[ALERT] Intrusion Detection System (IDS) triggered!',
    '[INFO] Disabling IDS via malformed packet injection...',
    '[SUCCESS] IDS bypassed successfully',
    '[INFO] Trying common admin credentials...',
    '[SUCCESS] Authentication successful for user: admin',
    '[INFO] Establishing secure tunnel to target server...',
    '[SUCCESS] Remote shell access granted',
    '[INFO] Enumerating system information...',
    '[SUCCESS] OS: Linux Ubuntu 22.04 LTS',
    '[INFO] Searching for sensitive files...',
    '[SUCCESS] Found config file: /var/www/.env',
    '[SUCCESS] Downloading configuration data...',
    '[INFO] Extracting database credentials...',
    '[SUCCESS] Database username: db_admin',
    '[SUCCESS] Database password: s3cr3t_p@ssw0rd',
    '[INFO] Uploading webshell payload...',
    '[SUCCESS] Webshell uploaded to /uploads/backdoor.php',
    '[INFO] Cleaning up logs and traces...',
    '[SUCCESS] Access granted to user profile'
  ];

  const simulateHackingLog = () => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < hackingMessages.length) {
        setLogLines((prev) => [...prev, hackingMessages[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setStage('complete'), 1500);
      }
    }, 600);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-green-400 font-mono">

      {stage === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center flex-col z-50">
          <div className="text-2xl md:text-4xl font-bold mb-6 animate-pulse">ACCESSING SYSTEM...</div>
          <div className="w-64 h-2 bg-gray-900 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="mt-4 text-sm">{progress}%</div>
        </div>
      )}

      {stage === 'error' && (
        <div className="absolute inset-0 flex items-center justify-center flex-col z-50 p-4">
          <div className="text-3xl md:text-5xl font-bold mb-6 animate-bounce">ERROR 404</div>
          <p className="text-lg md:text-xl mb-6">SYSTEM NOT FOUND</p>
          <div className="animate-pulse text-sm">Retrying connection...</div>
        </div>
      )}

      {stage === 'hacking' && (
        <div className="absolute inset-0 flex items-start justify-center z-50 p-6 pt-12 overflow-y-auto">
          <div className="bg-black border border-green-400 w-full max-w-2xl p-4 shadow-2xl shadow-green-400/20">
            <div className="flex space-x-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-sm leading-relaxed whitespace-pre-wrap">
              {logLines.map((line, index) => {
                if (typeof line !== 'string') return null; 

                let colorClass = 'text-green-400';
                if (line.startsWith('[ERROR]')) colorClass = 'text-red-500';
                if (line.startsWith('[WARNING]')) colorClass = 'text-yellow-500';
                if (line.startsWith('[SUCCESS]')) colorClass = 'text-green-500';
                if (line.startsWith('[ALERT]')) colorClass = 'text-pink-500';

                return (
                  <div key={index} className={colorClass}>
                    {line}
                  </div>
                );
              })}
            </pre>
          </div>
        </div>
      )}

      {stage === 'complete' && (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
          >
            <source src="https://cdn.pixabay.com/video/2023/04/19/156761-798731059_large.mp4 " type="video/mp4" />
            Your browser does not support the video tag.
          </video>


          <div className="absolute inset-0 grid-overlay z-10"></div>


          <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 glitch" data-text="Sanders">
              Sanders
            </h1>


            <p className="text-lg md:text-xl font-light mb-10 max-w-xl tracking-wider">
              FULL STACK DEVELOPER | TECH ENTHUSIAST
            </p>


            <div className="flex space-x-8 mb-12">
              <a
                href="https://github.com/pipolokaos1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300 hover:text-gray-300"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>


            <a
              href="https://727wysi.fun "
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full bg-green-500 text-black font-semibold shadow-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105"
            >
              VISIT MY SITE
            </a>


            <div className="mt-16 max-w-2xl text-sm md:text-base leading-relaxed">
              <p>
                Low fronted. Medium backend. And more fun. I am a full-stack developer with a passion for creating
                dynamic and responsive web applications. I have experience in various technologies, including React. 
              </p>
            </div>
          </div>


          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </>
      )}

      <style jsx>{`
        @keyframes glitch {
          0% {
            text-shadow: 1px 1px 0 #f00, -1px -1px 0 #0f0;
            transform: translate(0, 0);
          }
          20% {
            text-shadow: -2px 0 #f00, 2px 0 #0f0;
            transform: translate(-2px, 2px);
          }
          40% {
            text-shadow: 2px 0 #f00, -2px 0 #0f0;
            transform: translate(2px, -1px);
          }
          60% {
            text-shadow: -2px 1px #f00, 2px -1px #0f0;
            transform: translate(-2px, 0);
          }
          80% {
            text-shadow: 2px 1px #f00, -2px -1px #0f0;
            transform: translate(2px, 1px);
          }
          100% {
            text-shadow: none;
            transform: translate(0, 0);
          }
        }

        .glitch {
          position: relative;
          color: #00ff00;
          animation: glitch 1.5s infinite;
        }

        .grid-overlay::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(to right, rgba(0,255,0,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0,255,0,0.05) 1px, transparent 1px);
          background-size: 20px 20px;
          z-index: 10;
          pointer-events: none;
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}


window.App = App;