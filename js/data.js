export const pages = [
  { id: "page1", title: "Cucumber & BDD", theme: "Integration" },
  { id: "page2", title: "Architectural Rift", theme: "Logic" },
  { id: "page3", title: "Performance/Concurrency", theme: "Efficiency" },
  { id: "page4", title: "Browser & Languages", theme: "Compliance" },
  { id: "page5", title: "Debugging Workflow", theme: "DX" },
  { id: "page6", title: "Project Config", theme: "Ops" },
  { id: "page7", title: "Session & Auth", theme: "Security" },
  { id: "page8", title: "Hardware & Perms", theme: "Access" },
  { id: "page9", title: "Advanced Reporting", theme: "Insight" },
  { id: "page10", title: "Debug Artifacts", theme: "Evidence" },
  { id: "page11", title: "Code Generation", theme: "Automation" },
  { id: "page13", title: "Critical Comparison", theme: "Analysis" },
  { id: "page14", title: "Emulation & Environment", theme: "Simulation" },
  { id: "page15", title: "Gherkin & Tagging", theme: "Organization" },
  { id: "page16", title: "API Testing", theme: "Connectivity" },
  { id: "page17", title: "CI & Infrastructure", theme: "Scale" },
  { id: "page18", title: "Reports & Analysis", theme: "Insights" },
  { id: "page12", title: "The TCO Matrix", theme: "Strategy" },
];

export const pageTemplates = {
  page1: `
        <div class="max-w-4xl">
            <h2 class="text-4xl font-black text-gray-900 mb-2">Cucumber & BDD Support</h2>
            <p class="text-gray-500 mb-8">Bridging the gap between stakeholders and engineers via behavior-driven development.</p>
            
            <div class="space-y-8">
                <div class="card-detailed border-l-8 border-indigo-600">
                    <h3 class="text-xl font-bold mb-4 flex items-center"><span class="pro-label bg-cypress">Cypress</span> Community-Driven BDD</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                        <div class="space-y-2">
                            <p class="font-bold text-gray-700">How it works:</p>
                            <p>Relies on the <strong>@badeball/cypress-cucumber-preprocessor</strong>. It intercepts the file loading process, transpiling .feature files into JS code using Webpack or Esbuild.</p>
                        </div>
                        <ul class="list-disc pl-4 space-y-1">
                            <li><strong>Legacy Advantage:</strong> Massive documentation and shared step definitions in the community.</li>
                            <li><strong>DX:</strong> Allows viewing Gherkin steps directly in the Cypress Test Runner UI.</li>
                            <li><strong>Risk:</strong> High dependency on third-party plugin maintenance; breaking changes in Cypress versions often lag in plugin updates.</li>
                        </ul>
                    </div>
                </div>

                <div class="card-detailed border-l-8 border-rose-600">
                    <h3 class="text-xl font-bold mb-4 flex items-center"><span class="pro-label bg-playwright">Playwright</span> Native Integration Model</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                        <div class="space-y-2">
                            <p class="font-bold text-gray-700">How it works:</p>
                            <p>Uses <strong>playwright-bdd</strong>. Instead of just running feature files, it <em>generates</em> standard Playwright test files from Gherkin. This ensures 100% feature parity with standard tests.</p>
                        </div>
                        <ul class="list-disc pl-4 space-y-1">
                            <li><strong>Performance:</strong> Supports full parallelism and sharding natively, unlike some Cypress BDD configurations.</li>
                            <li><strong>Modern Syntax:</strong> Supports ESM, Decorators, and clean Page Object Model (POM) mapping within step definitions.</li>
                            <li><strong>Stability:</strong> Because it generates Playwright code, standard tooling (Trace Viewer, Reporters) works out of the box.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`,

  page2: `
        <div class="max-w-5xl">
            <h2 class="text-4xl font-black text-gray-900 mb-2">The Architectural Rift</h2>
            <p class="text-gray-500 mb-10">Understanding the "In-Browser" vs "Out-of-Process" execution boundary.</p>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div class="space-y-6">
                    <div class="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                        <h3 class="font-bold text-indigo-700 mb-2 underline">Cypress: Inside the Sandbox</h3>
                        <p class="text-sm leading-relaxed text-gray-700">Cypress operates within the <strong>same event loop</strong> as your application. When the browser starts, Cypress injects its own proxy and control code directly into the window.</p>
                        <ul class="mt-4 space-y-2 text-xs font-semibold text-gray-600">
                            <li class="flex gap-2">✅ Synchronous access to DOM elements, state (Redux/Vuex), and cookies.</li>
                            <li class="flex gap-2">❌ Bound by browser security (Same-Origin policy).</li>
                            <li class="flex gap-2">❌ Cannot control multiple browser tabs or distinct browser windows.</li>
                        </ul>
                    </div>
                    <div class="p-4 bg-white border rounded-xl shadow-sm">
                        <p class="text-xs font-bold uppercase text-gray-400 mb-2">Control Flow</p>
                        <div class="flex items-center gap-2">
                            <div class="p-2 bg-indigo-600 text-white rounded text-[10px]">Test Logic</div>
                            <span class="text-gray-300">→</span>
                            <div class="p-2 bg-indigo-400 text-white rounded text-[10px]">Application DOM</div>
                            <span class="text-gray-400 text-[10px]">(Single Loop)</span>
                        </div>
                    </div>
                </div>

                <div class="space-y-6">
                    <div class="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                        <h3 class="font-bold text-rose-700 mb-2 underline">Playwright: CDP / WebSocket Model</h3>
                        <p class="text-sm leading-relaxed text-gray-700">Playwright runs in <strong>Node.js</strong> and speaks to browsers via the Chrome DevTools Protocol (CDP) or similar drivers for Firefox/WebKit via WebSockets.</p>
                        <ul class="mt-4 space-y-2 text-xs font-semibold text-gray-600">
                            <li class="flex gap-2">✅ Full control over the browser executable (Mobile emulation, Geolocation, etc).</li>
                            <li class="flex gap-2">✅ Native Multi-Origin support (Domain A to Domain B in one test).</li>
                            <li class="flex gap-2">✅ Isolated "Browser Contexts" act like incognito windows for every test.</li>
                        </ul>
                    </div>
                    <div class="p-4 bg-white border rounded-xl shadow-sm">
                        <p class="text-xs font-bold uppercase text-gray-400 mb-2">Control Flow</p>
                        <div class="flex items-center gap-2">
                            <div class="p-2 bg-gray-800 text-white rounded text-[10px]">Node Proc</div>
                            <span class="text-gray-300">~WS~</span>
                            <div class="p-2 bg-rose-500 text-white rounded text-[10px]">Context A</div>
                            <div class="p-2 bg-rose-500 text-white rounded text-[10px]">Context B</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`,

  page3: `
        <div class="max-w-4xl">
            <h2 class="text-4xl font-black text-gray-900 mb-4">Performance & Concurrency</h2>
            <p class="text-gray-500 mb-8">How frameworks handle scale—from local development to enterprise CI.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div class="card-detailed">
                    <h4 class="font-bold mb-4 text-gray-700">Execution Speed Benchmarks</h4>
                    <div class="chart-container">
                        <canvas id="perfChart"></canvas>
                    </div>
                </div>
                <div class="space-y-6">
                    <div class="p-6 bg-white border rounded-2xl">
                        <h5 class="font-bold text-rose-600 mb-2">Playwright Workers</h5>
                        <p class="text-xs text-gray-600 leading-relaxed">Playwright starts a pool of worker processes. Each worker is an independent OS process. On an 8-core CI machine, you get 8x speed natively.
                        <br/><br/><strong>Sharding:</strong> <code>npx playwright test --shard=1/3</code> allows splitting tests across totally different CI machines for free.</p>
                    </div>
                    <div class="p-6 bg-white border rounded-2xl">
                        <h5 class="font-bold text-indigo-600 mb-2">Cypress Parallelization</h5>
                        <p class="text-xs text-gray-600 leading-relaxed">Cypress parallelization requires <strong>Cypress Cloud</strong> (paid). You run multiple CI instances, and the Cloud orchestrates which spec goes where to balance load.
                        <br/><br/><strong>Local Limitation:</strong> You cannot run specs in parallel on a single machine without community hacky plugins.</p>
                    </div>
                </div>
            </div>
        </div>`,

  page4: `
        <div class="max-w-4xl">
            <h2 class="text-4xl font-black text-gray-900 mb-2">Cross-Browser & Language Parity</h2>
            <p class="text-gray-500 mb-10">Compatibility across the modern web and organizational tech stacks.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div class="space-y-8">
                    <div>
                        <h4 class="font-bold text-gray-400 uppercase text-[10px] mb-4">Browser Support Matrix</h4>
                        <canvas id="browserChart"></canvas>
                    </div>
                    <div class="p-4 bg-slate-50 rounded-lg">
                        <p class="text-xs italic text-gray-500">Note: Playwright's WebKit is a native build, ensuring 100% Safari-like rendering accuracy.</p>
                    </div>
                </div>
                <div class="space-y-6">
                    <div class="card-detailed">
                        <h4 class="font-bold text-rose-600 mb-4">Playwright: Multi-Language</h4>
                        <p class="text-xs text-gray-600 mb-4">Standardized across different environments. Your SDETs can write in the language the backend uses:</p>
                        <div class="grid grid-cols-3 gap-2">
                            <span class="p-2 bg-gray-100 rounded text-[10px] text-center font-bold">TypeScript</span>
                            <span class="p-2 bg-gray-100 rounded text-[10px] text-center font-bold">Python</span>
                            <span class="p-2 bg-gray-100 rounded text-[10px] text-center font-bold">Java</span>
                            <span class="p-2 bg-gray-100 rounded text-[10px] text-center font-bold">.NET (C#)</span>
                        </div>
                    </div>
                    <div class="card-detailed">
                        <h4 class="font-bold text-indigo-600 mb-4">Cypress: JS First</h4>
                        <p class="text-xs text-gray-600">Deeply optimized for the JavaScript ecosystem. While limiting, it creates a "Frontend First" culture where developers contribute more easily because the tests look exactly like their app code.</p>
                    </div>
                </div>
            </div>
        </div>`,

  page5: `
        <div class="max-w-4xl">
            <h2 class="text-4xl font-black text-gray-900 mb-2">Debugging & DX</h2>
            <p class="text-gray-500 mb-10">Comparing real-time "Time Travel" vs post-mortem "Trace Viewing".</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="space-y-4">
                    <h4 class="font-bold text-indigo-600">The Cypress "Test Runner"</h4>
                    <ul class="text-sm space-y-4 text-gray-600">
                        <li class="bg-white p-4 rounded-xl border"><strong>Real-time GUI:</strong> Watch every click and scroll happen. Pause execution and inspect the DOM <em>live</em>.</li>
                        <li class="bg-white p-4 rounded-xl border"><strong>Command Log:</strong> See the exact state of the app before and after every single command.</li>
                        <li class="bg-white p-4 rounded-xl border"><strong>Hot Reload:</strong> Save your spec file and watch the test rerun instantly. Best-in-class for TDD.</li>
                    </ul>
                </div>
                <div class="space-y-4">
                    <h4 class="font-bold text-rose-600">The Playwright "Trace Viewer"</h4>
                    <ul class="text-sm space-y-4 text-gray-600">
                        <li class="bg-white p-4 rounded-xl border"><strong>The Timeline:</strong> View a filmstrip of your test. Hover over a point in time to see the screenshot.</li>
                        <li class="bg-white p-4 rounded-xl border"><strong>Full Snapshot:</strong> Unlike a video, a Trace allows you to open DevTools <em>inside the trace</em> and inspect elements after the test is over.</li>
                        <li class="bg-white p-4 rounded-xl border"><strong>Network/Logs:</strong> See exact API requests and console logs synced perfectly with the UI actions.</li>
                    </ul>
                </div>
            </div>
        </div>`,

  page6: `
        <div class="max-w-4xl">
            <h2 class="text-4xl font-black text-gray-900 mb-2">Project Configuration</h2>
            <p class="text-gray-500 mb-10">How frameworks handle environments, devices, and global settings.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="card-detailed">
                    <h4 class="font-bold text-rose-600 mb-4">Playwright "Projects" Concept</h4>
                    <p class="text-xs text-gray-600 mb-4">A single config file can describe multiple "runs". You define a matrix of browsers and devices once.</p>
                    <pre>
projects: [
  { name: 'Chromium', use: { ...devices['Desktop Chrome'] } },
  { name: 'Mobile Safari', use: { ...devices['iPhone 12'] } },
  { name: 'Staging Auth', use: { storageState: 'auth.json' } }
]</pre>
                    <p class="text-xs text-gray-400 mt-2">Scale: Run one or all with <code>--project=...</code></p>
                </div>
                <div class="card-detailed">
                    <h4 class="font-bold text-indigo-600 mb-4">Cypress Configuration</h4>
                    <p class="text-xs text-gray-600 mb-4">Standard JSON-based config. Environment switching is usually handled via <code>cypress.config.ts</code> logic or command-line flags.</p>
                    <ul class="text-xs text-gray-500 mt-4 space-y-2">
                        <li>❌ No native "Matrix" support (e.g. run same test on 5 viewports in one command).</li>
                        <li>✅ Excellent plugin ecosystem for configuration (e.g. <code>cypress-dotenv</code>).</li>
                    </ul>
                </div>
            </div>
        </div>`,

  page7: `
        <div class="max-w-4xl">
            <h2 class="text-4xl font-black text-gray-900 mb-2">Session & Auth Strategy</h2>
            <p class="text-gray-500 mb-10">Zero-cost login reuse and cross-test state isolation.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div class="space-y-4">
                    <h4 class="font-bold text-rose-600">Playwright "Storage State"</h4>
                    <p class="text-sm text-gray-600">The gold standard. Log in once via the API or UI, save the cookies/localStorage to a JSON file, and inject it into the <code>browserContext</code> of all future tests. It skips the login UI entirely with <strong>zero overhead</strong>.</p>
                    <div class="p-4 bg-rose-50 rounded-xl border border-rose-100 text-[10px] font-mono">
                        // setup<br/>
                        await context.storageState({ path: 'auth.json' });<br/>
                        // test<br/>
                        const context = await browser.newContext({ storageState: 'auth.json' });
                    </div>
                </div>
                <div class="space-y-4">
                    <h4 class="font-bold text-indigo-600">Cypress "cy.session()"</h4>
                    <p class="text-sm text-gray-600">Great for caching state within a single runner session. It clears cookies and storage, then restores the specific session state. It handles "validation" checks to ensure the session is still active.</p>
                    <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-100 text-[10px] font-mono">
                        cy.session('user-1', () => {<br/>
                        &nbsp;&nbsp;cy.request('/api/login');<br/>
                        }, {<br/>
                        &nbsp;&nbsp;validate: () => { cy.getCookie('id').should('exist'); }<br/>
                        });
                    </div>
                </div>
            </div>
        </div>`,

  page8: `
        <div class="max-w-4xl">
            <h2 class="text-4xl font-black text-gray-900 mb-2">Browser Permissions & Control</h2>
            <p class="text-gray-500 mb-10">Managing complex browser APIs like Geolocation, Camera, and Notifications.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white border p-6 rounded-2xl">
                    <h4 class="font-bold text-rose-600 mb-4">Playwright Config-Level Control</h4>
                    <p class="text-xs text-gray-600 leading-relaxed mb-4">Since Playwright controls the browser process, you can declare permissions at the context level. No manual mocking required for most hardware APIs.</p>
                    <div class="space-y-2">
                        <div class="flex items-center justify-between p-2 bg-slate-50 rounded text-[10px]"><span>Geolocation</span> <span class="text-rose-500 font-bold">Native Config</span></div>
                        <div class="flex items-center justify-between p-2 bg-slate-50 rounded text-[10px]"><span>Camera/Mic</span> <span class="text-rose-500 font-bold">Auto-Grant</span></div>
                        <div class="flex items-center justify-between p-2 bg-slate-50 rounded text-[10px]"><span>Color Scheme</span> <span class="text-rose-500 font-bold">Emulated</span></div>
                    </div>
                </div>
                <div class="bg-white border p-6 rounded-2xl">
                    <h4 class="font-bold text-indigo-600 mb-4">Cypress Runtime Stubbing</h4>
                    <p class="text-xs text-gray-600 leading-relaxed mb-4">Because Cypress is "inside" the window, you often have to use <code>cy.stub()</code> on the <code>window.navigator</code> object before the app loads to simulate hardware responses.</p>
                    <div class="space-y-2">
                        <div class="flex items-center justify-between p-2 bg-slate-50 rounded text-[10px]"><span>Geolocation</span> <span class="text-indigo-500 font-bold">cy.stub()</span></div>
                        <div class="flex items-center justify-between p-2 bg-slate-50 rounded text-[10px]"><span>Clipboard</span> <span class="text-indigo-500 font-bold">Plugin Needed</span></div>
                        <div class="flex items-center justify-between p-2 bg-slate-50 rounded text-[10px]"><span>Mobile Emulation</span> <span class="text-indigo-500 font-bold">Viewport Resize</span></div>
                    </div>
                </div>
            </div>
        </div>`,

  page9: `
        <div class="max-w-4xl">
            <h2 class="text-4xl font-black text-gray-900 mb-2">Advanced Reporting</h2>
            <p class="text-gray-500 mb-10">Turning raw test data into actionable insights for the business.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div class="card-detailed border-t-4 border-indigo-400">
                    <h4 class="font-bold mb-4">Cypress: Dashboard Ecosystem</h4>
                    <p class="text-sm text-gray-600 mb-4">The "Cypress Cloud" provides deep flake detection, historical performance graphs, and visual diffing. It is highly optimized for management reporting.</p>
                    <ul class="text-xs space-y-2 text-gray-500">
                        <li>✅ "Flaky" test identification algorithms.</li>
                        <li>✅ Slack/Jira native integrations.</li>
                        <li>❌ High cost per test result at enterprise scale.</li>
                    </ul>
                </div>
                <div class="card-detailed border-t-4 border-rose-400">
                    <h4 class="font-bold mb-4">Playwright: Open Extensibility</h4>
                    <p class="text-sm text-gray-600 mb-4">Playwright generates a lightweight, standalone HTML report that is perfect for CI artifacts. For enterprise analytics, most teams integrate it with open-source tools like <strong>Allure</strong> or <strong>Currents.dev</strong>.</p>
                    <ul class="text-xs space-y-2 text-gray-500">
                        <li>✅ Gorgeous HTML report with built-in Trace Viewer links.</li>
                        <li>✅ Zero-cost local or self-hosted reporting.</li>
                        <li>⚠️ Requires more "DIY" effort to build a historical analytics dashboard.</li>
                    </ul>
                </div>
            </div>
        </div>`,

  page10: `
        <div class="max-w-4xl">
            <h2 class="text-4xl font-black text-gray-900 mb-2">Debug Artifacts</h2>
            <p class="text-gray-500 mb-10">What do you get when a test fails at 3 AM in CI?</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-gray-50 p-6 rounded-2xl">
                    <h4 class="font-bold text-indigo-600 mb-4 underline">Cypress Evidence</h4>
                    <ul class="space-y-4 text-xs">
                        <li class="flex items-center gap-3">📸 <strong>Screenshots:</strong> Automatic on failure. High quality.</li>
                        <li class="flex items-center gap-3">🎥 <strong>Video:</strong> Records the entire browser session. Great for seeing the "flow".</li>
                        <li class="flex items-center gap-3">📂 <strong>JSON Logs:</strong> Command history and browser console logs.</li>
                    </ul>
                </div>
                <div class="bg-slate-900 text-white p-6 rounded-2xl">
                    <h4 class="font-bold text-rose-400 mb-4 underline">Playwright Evidence</h4>
                    <ul class="space-y-4 text-xs">
                        <li class="flex items-center gap-3">🕵️ <strong>Traces:</strong> The "Black Box" recorder. Allows you to re-run the test logic after the test is dead.</li>
                        <li class="flex items-center gap-3">🎥 <strong>Video:</strong> Can record video per-test or only on failure.</li>
                        <li class="flex items-center gap-3">📡 <strong>HAR Files:</strong> Records full network traffic for debugging difficult API race conditions.</li>
                    </ul>
                </div>
            </div>
        </div>`,

  page11: `
        <div class="max-w-4xl">
            <h2 class="text-4xl font-black text-gray-900 mb-2">Code Generation & Tooling</h2>
            <p class="text-gray-500 mb-10">Accelerating test authoring for non-SDETs and rapid prototyping.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="card-detailed">
                    <h4 class="font-bold text-rose-600 mb-2">Playwright Codegen</h4>
                    <p class="text-xs text-gray-600 mb-4">Launch a browser and a code editor side-by-side. As you click, Playwright writes the code using <strong>Aria-based locators</strong> (getByRole) which are more resilient and accessible.</p>
                    <div class="bg-gray-100 p-3 rounded text-[9px] font-mono text-gray-500">npx playwright codegen google.com</div>
                </div>
                <div class="card-detailed">
                    <h4 class="font-bold text-indigo-600 mb-2">Cypress Studio</h4>
                    <p class="text-xs text-gray-600 mb-4">An experimental feature (now stable-ish) that allows you to "Record" steps inside the Test Runner GUI. It appends the code directly to your spec file.</p>
                    <p class="text-[10px] text-amber-600 mt-2 font-bold">⚠️ Note: Often produces brittle CSS/ID-based selectors compared to Playwright's role-based approach.</p>
                </div>
            </div>
        </div>`,

  page12: `
        <div class="max-w-5xl">
            <h2 class="text-4xl font-black text-gray-900 mb-6 underline decoration-rose-500">The Strategic Total Cost of Ownership (TCO) Matrix</h2>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="lg:col-span-1 bg-white p-8 rounded-3xl border shadow-sm">
                    <h3 class="text-xl font-black mb-6">ROI Factors</h3>
                    <div class="space-y-6">
                        <div>
                            <p class="text-[10px] font-bold text-gray-400 uppercase">Parallelism Cost</p>
                            <p class="text-xs text-indigo-600 font-bold">Cypress: Paid Subscription</p>
                            <p class="text-xs text-rose-600 font-bold">Playwright: $0 (Local/CI)</p>
                        </div>
                        <div>
                            <p class="text-[10px] font-bold text-gray-400 uppercase">Learning Curve</p>
                            <p class="text-xs text-indigo-600 font-bold">Cypress: Very Low (JS Devs)</p>
                            <p class="text-xs text-rose-600 font-bold">Playwright: Moderate (Async/Await)</p>
                        </div>
                        <div>
                            <p class="text-[10px] font-bold text-gray-400 uppercase">Long Term Flake</p>
                            <p class="text-xs text-indigo-600 font-bold">Cypress: Auto-waiting (Proprietary)</p>
                            <p class="text-xs text-rose-600 font-bold">Playwright: Auto-waiting (Native CDP)</p>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-indigo-600 p-8 rounded-3xl text-white shadow-xl">
                        <h4 class="text-xl font-bold mb-4">DEPLOY CYPRESS IF...</h4>
                        <ul class="text-xs space-y-3 opacity-90">
                            <li>• You are building a greenfield React/Vue app.</li>
                            <li>• Developers are writing their own tests.</li>
                            <li>• You need Component Testing as a primary tool.</li>
                            <li>• You prioritize DX and visual TDD cycles.</li>
                        </ul>
                    </div>
                    <div class="bg-rose-600 p-8 rounded-3xl text-white shadow-xl">
                        <h4 class="text-xl font-bold mb-4">DEPLOY PLAYWRIGHT IF...</h4>
                        <ul class="text-xs space-y-3 opacity-90">
                            <li>• You have a massive test suite (>1000 specs).</li>
                            <li>• You need to test on Safari (WebKit).</li>
                            <li>• Cross-origin (Domain A to Domain B) is vital.</li>
                            <li>• CI cost reduction is a top business KPI.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`,

  page13: `
        <div class="max-w-5xl">
            <h2 class="text-4xl font-black text-gray-900 mb-2">Critical Comparison & Killer Features</h2>
            <p class="text-gray-500 mb-10">A brutally honest breakdown of where each tool shines and where it fails completely.</p>
            
            <div class="space-y-12">
                <!-- Playwright Section -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div class="lg:col-span-4 self-center">
                         <h3 class="text-3xl font-black text-rose-600 mb-2">PLAYWRIGHT</h3>
                         <p class="text-sm text-gray-500 font-medium">The Speed Demon</p>
                    </div>
                    <div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-white p-6 rounded-2xl border-l-4 border-green-500 shadow-sm">
                            <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">✅ The Good</h4>
                            <ul class="space-y-2 text-xs text-gray-600">
                                <li><strong>Blazing Fast:</strong> Uses CDP (Chrome DevTools Protocol) for direct browser communication.</li>
                                <li><strong>Global Auto-Wait:</strong> Naturally waits for network, animations, and attachability.</li>
                                <li><strong>Parallelism:</strong> Free sharding on any CI provider. 100% free.</li>
                                <li><strong>Multi-Everything:</strong> Multiple tabs, origins, and user contexts in one test.</li>
                            </ul>
                        </div>
                        <div class="bg-white p-6 rounded-2xl border-l-4 border-red-500 shadow-sm">
                            <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">❌ The Bad</h4>
                            <ul class="space-y-2 text-xs text-gray-600">
                                <li><strong>Strictness:</strong> Fails instantly if multiple elements match a locator (requires precise selectors).</li>
                                <li><strong>Learning Curve:</strong> Requires understanding <code>async/await</code> and Promises deeply.</li>
                                <li><strong>Community:</strong> Newer than Cypress, fewer "copy-paste" StackOverflow answers.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Cypress Section -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-gray-100">
                    <div class="lg:col-span-4 self-center">
                         <h3 class="text-3xl font-black text-indigo-600 mb-2">CYPRESS</h3>
                         <p class="text-sm text-gray-500 font-medium">The Developer's Delight</p>
                    </div>
                    <div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-white p-6 rounded-2xl border-l-4 border-green-500 shadow-sm">
                            <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">✅ The Good</h4>
                            <ul class="space-y-2 text-xs text-gray-600">
                                <li><strong>Time Travel:</strong> The best debugging experience in the industry. Snapshot every command.</li>
                                <li><strong>Automatic Retries:</strong> Flakiness buffering is built into the command queue.</li>
                                <li><strong>Documentation:</strong> Incredible docs and massive plugin ecosystem (thousands of plugins).</li>
                                <li><strong>Simplicity:</strong> jQuery-like syntax is easy for junior devs to pick up.</li>
                            </ul>
                        </div>
                        <div class="bg-white p-6 rounded-2xl border-l-4 border-red-500 shadow-sm">
                            <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">❌ The Bad</h4>
                            <ul class="space-y-2 text-xs text-gray-600">
                                <li><strong>Single Origin:</strong> Cannot visit google.com and then github.com in one test.</li>
                                <li><strong>Performance:</strong> Slower due to in-browser execution model.</li>
                                <li><strong>Limited Iframe Support:</strong> Native handling is clunky compared to Playwright's <code>frameLocator</code>.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- The "Killer" Features -->
                <div class="pt-10">
                    <h3 class="text-2xl font-black text-slate-800 mb-6 text-center uppercase tracking-widest">✨ Exclusive Capabilities</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        
                        <!-- Playwright Exclusive -->
                        <div class="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
                            <div class="absolute -right-10 -top-10 bg-rose-500 w-32 h-32 rounded-full blur-3xl opacity-20"></div>
                            <h4 class="text-xl font-bold text-rose-400 mb-4">Only in Playwright</h4>
                            <ul class="space-y-4 text-xs font-mono">
                                <li class="flex gap-3">
                                    <span class="text-rose-500">GlobalAuth</span>
                                    <span class="text-gray-400">Reuse signed-in state across ALL tests with <code>storageState</code>. Zero login GUI overhead.</span>
                                </li>
                                <li class="flex gap-3">
                                    <span class="text-rose-500">WebKit</span>
                                    <span class="text-gray-400">Testing on real Safari engine (Linux/Windows included). Cypress uses experiment.</span>
                                </li>
                                <li class="flex gap-3">
                                    <span class="text-rose-500">Network</span>
                                    <span class="text-gray-400">Full HTTP traffic control. Mock websockets, abort requests, modify headers.</span>
                                </li>
                            </ul>
                        </div>

                         <!-- Cypress Exclusive -->
                        <div class="bg-white border-2 border-indigo-100 p-8 rounded-3xl relative overflow-hidden shadow-lg">
                            <div class="absolute -left-10 -bottom-10 bg-indigo-500 w-32 h-32 rounded-full blur-3xl opacity-10"></div>
                            <h4 class="text-xl font-bold text-indigo-600 mb-4">Only in Cypress</h4>
                            <ul class="space-y-4 text-xs font-mono text-gray-600">
                                <li class="flex gap-3">
                                    <span class="text-indigo-500 font-bold">Studio</span>
                                    <span>Visual "Record & Playback" inside the test runner that appends code to your file.</span>
                                </li>
                                <li class="flex gap-3">
                                    <span class="text-indigo-500 font-bold">Component</span>
                                    <span>Mount React/Vue components in isolation without a browser. (Playwright has this too, but Cypress is more mature).</span>
                                </li>
                                <li class="flex gap-3">
                                    <span class="text-indigo-500 font-bold">Spies</span>
                                    <span><code>cy.spy()</code> and <code>cy.stub()</code> are deeply integrated into the command chain logic.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>`,

  page14: `
        <div class="max-w-4xl">
            <h2 class="text-4xl font-black text-gray-900 mb-2">Emulation & Environment</h2>
            <p class="text-gray-500 mb-10">Going beyond simple viewport resizing: mimicking real-world conditions.</p>
            
            <div class="grid grid-cols-1 gap-12">
                <!-- Device Emulation -->
                <div class="bg-white p-8 rounded-3xl border shadow-sm">
                    <h3 class="font-bold text-xl text-gray-800 mb-6 flex items-center gap-2">📱 Mobile & Device Emulation</h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <span class="px-2 py-1 bg-rose-100 text-rose-700 text-[10px] font-bold rounded mb-2 inline-block">PLAYWRIGHT STRATEGY</span>
                            <p class="text-sm text-gray-600 mb-4">Playwright doesn't just resize the window. It changes the <strong>User Agent</strong>, <strong>Pixel Ratio (DPI)</strong>, and enables <strong>Touch Events</strong>.</p>
                            <div class="bg-slate-900 p-4 rounded-xl text-gray-300 font-mono text-xs overflow-x-auto">
                                <span class="text-purple-400">const</span> { devices } = <span class="text-blue-400">require</span>(<span class="text-green-300">'@playwright/test'</span>);<br/><br/>
                                <span class="text-gray-500">// in config</span><br/>
                                use: {<br/>
                                &nbsp;&nbsp;...devices[<span class="text-green-300">'iPhone 13 Pro'</span>],<br/>
                                &nbsp;&nbsp;locale: <span class="text-green-300">'de-DE'</span>,<br/>
                                &nbsp;&nbsp;geolocation: { longitude: 12.4, latitude: 41.8 },<br/>
                                &nbsp;&nbsp;permissions: [<span class="text-green-300">'geolocation'</span>]<br/>
                                }
                            </div>
                        </div>
                        <div>
                            <span class="px-2 py-1 bg-indigo-100 text-indigo-700 text-[10px] font-bold rounded mb-2 inline-block">CYPRESS STRATEGY</span>
                            <p class="text-sm text-gray-600 mb-4">Primarily relies on <code>cy.viewport()</code>. To simulate touch or geolocation, you often need to stub browser APIs manually or use Chrome Debugger Protocol commands explicitly.</p>
                            <div class="bg-indigo-50 p-4 rounded-xl text-indigo-900 font-mono text-xs overflow-x-auto">
                                <span class="text-blue-600">cy</span>.viewport(<span class="text-green-600">'iphone-x'</span>);<br/><br/>
                                <span class="text-gray-400">// Manual stubbing often needed</span><br/>
                                <span class="text-blue-600">cy</span>.visit(<span class="text-green-600">'/'</span>, {<br/>
                                &nbsp;&nbsp;onBeforeLoad(win) {<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-600">cy</span>.stub(win.navigator.geolocation, <span class="text-green-600">'getCurrentPosition'</span>)...<br/>
                                &nbsp;&nbsp;}<br/>
                                });
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Network Conditions -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div class="card-detailed">
                        <h4 class="font-bold text-gray-700 mb-2">🌐 Network Throttling</h4>
                        <p class="text-xs text-gray-500 mb-4">Simulating slow 3G/4G connections to test loading states.</p>
                        
                        <div class="space-y-4">
                            <div class="border-l-2 border-rose-500 pl-4">
                                <p class="text-[10px] font-bold text-rose-600 uppercase">Playwright</p>
                                <p class="text-[10px] text-gray-600">Can connect to CDP session to throttle network conditions precisely.</p>
                            </div>
                            <div class="border-l-2 border-indigo-500 pl-4">
                                <p class="text-[10px] font-bold text-indigo-600 uppercase">Cypress</p>
                                <p class="text-[10px] text-gray-600">Can throttle network via <code>cy.intercept()</code> delays, but true connection throttling requires browser-level config.</p>
                            </div>
                        </div>
                     </div>

                     <div class="card-detailed">
                        <h4 class="font-bold text-gray-700 mb-2">🌍 Timezone & Locator</h4>
                        <p class="text-xs text-gray-500 mb-4">Critical for international testing (Currency, Dates).</p>
                        
                         <div class="space-y-4">
                            <div class="border-l-2 border-rose-500 pl-4">
                                <p class="text-[10px] font-bold text-rose-600 uppercase">Playwright</p>
                                <p class="text-[10px] text-gray-600">Set <code>timezoneId</code> and <code>locale</code> in config. Affects <code>Intl</code> API instantly.</p>
                            </div>
                            <div class="border-l-2 border-indigo-500 pl-4">
                                <p class="text-[10px] font-bold text-indigo-600 uppercase">Cypress</p>
                                <p class="text-[10px] text-gray-600">Set <code>TZ</code> environment variable before launching the browser. Harder to switch per-test.</p>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>`,

  page15: `
        <div class="max-w-4xl">
            <h2 class="text-4xl font-black text-gray-900 mb-2">Gherkin & Tagging Strategy</h2>
            <p class="text-gray-500 mb-10">Organizing thousands of scenarios with metadata and execution filters.</p>
            
            <div class="grid grid-cols-1 gap-12">
                <div class="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
                    <h3 class="font-bold text-xl text-indigo-900 mb-4">Cypress Tagging (@badeball)</h3>
                    <p class="text-sm text-gray-600 mb-4">Relies on preprocessor parsing. Tags are converted into mocha test configuration objects or skipped at the pre-compilation stage.</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p class="text-[10px] font-bold uppercase text-indigo-400 mb-2">Feature File</p>
                            <div class="bg-white p-4 rounded-xl text-xs font-mono border">
                                <span class="text-purple-600">@smoke @login</span><br/>
                                Feature: Authentication<br/><br/>
                                &nbsp;&nbsp;<span class="text-purple-600">@desktop-only</span><br/>
                                &nbsp;&nbsp;Scenario: Secure Login
                            </div>
                        </div>
                        <div>
                            <p class="text-[10px] font-bold uppercase text-indigo-400 mb-2">Execution Command</p>
                            <div class="bg-slate-800 p-4 rounded-xl text-xs font-mono text-white">
                                npx cypress run --env TAGS="not @wip and @smoke"
                            </div>
                            <p class="text-[10px] text-gray-500 mt-2 italic">Note: Boolean logic support depends on the specific preprocessor version/configuration.</p>
                        </div>
                    </div>
                </div>

                <div class="bg-rose-50 p-8 rounded-3xl border border-rose-100">
                    <h3 class="font-bold text-xl text-rose-900 mb-4">Playwright Native Annotations</h3>
                    <p class="text-sm text-gray-600 mb-4">With <code>playwright-bdd</code>, Gherkin tags are transpiled directly into Playwright's native annotation system (<code>test.skip()</code>, <code>test.tag()</code>).</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p class="text-[10px] font-bold uppercase text-rose-400 mb-2">Special Tag Mapping</p>
                            <ul class="text-xs space-y-2 font-mono bg-white p-4 rounded-xl border">
                                <li class="flex justify-between"><span>@skip</span> <span class="text-gray-400">→ test.skip()</span></li>
                                <li class="flex justify-between"><span>@fixme</span> <span class="text-gray-400">→ test.fixme()</span></li>
                                <li class="flex justify-between"><span>@slow</span> <span class="text-gray-400">→ test.slow()</span></li>
                                <li class="flex justify-between"><span>@serial</span> <span class="text-gray-400">→ test.describe.configure({mode:'serial'})</span></li>
                            </ul>
                        </div>
                        <div>
                            <p class="text-[10px] font-bold uppercase text-rose-400 mb-2">Execution Command</p>
                            <div class="bg-slate-800 p-4 rounded-xl text-xs font-mono text-white">
                                npx playwright test --grep "@smoke" --grep-invert "@mobile"
                            </div>
                            <p class="text-[10px] text-gray-500 mt-2 italic">Native support for Regex filtering makes it extremely powerful.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`,

  page16: `
        <div class="max-w-4xl">
            <h2 class="text-4xl font-black text-gray-900 mb-2">API Testing Architecture</h2>
            <p class="text-gray-500 mb-10">Browser-loop execution vs. dedicated Node.js request runners.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <!-- Playwright API -->
                 <div class="card-detailed border-t-4 border-rose-500">
                    <h3 class="font-bold text-xl text-gray-800 mb-2">Playwright APIRequest</h3>
                    <span class="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded mb-4 inline-block">Runs in Node.js</span>
                    
                    <p class="text-sm text-gray-600 mb-6">Playwright treats API testing as a first-class citizen. It creates a dedicated <code>APIRequestContext</code> that does NOT require a browser window to be valid. It is fast, lightweight, and can share cookies with browser contexts.</p>
                    
                    <div class="bg-gray-900 p-4 rounded-xl text-gray-300 font-mono text-[10px] overflow-x-auto">
                        <span class="text-purple-400">const</span> api = <span class="text-purple-400">await</span> request.newContext({<br/>
                        &nbsp;&nbsp;baseURL: <span class="text-green-300">'https://api.github.com'</span>,<br/>
                        &nbsp;&nbsp;extraHTTPHeaders: { Authorization: <span class="text-green-300">'token...'</span> }<br/>
                        });<br/><br/>
                        <span class="text-purple-400">const</span> res = <span class="text-purple-400">await</span> api.fetch(<span class="text-green-300">'/user/repos'</span>);<br/>
                        expect(res.ok()).toBeTruthy();
                    </div>

                    <ul class="mt-4 space-y-2 text-xs text-gray-600">
                        <li class="flex gap-2">⚡ <strong>Speed:</strong> Zero browser overhead. Comparable to Axios/Fetch.</li>
                        <li class="flex gap-2">🔄 <strong>Hybrid:</strong> Easily pass state from API -> Browser (e.g. create data via API, verify in UI).</li>
                    </ul>
                </div>

                <!-- Cypress API -->
                <div class="card-detailed border-t-4 border-indigo-500">
                    <h3 class="font-bold text-xl text-gray-800 mb-2">Cypress cy.request()</h3>
                    <span class="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold rounded mb-4 inline-block">Runs in Browser Loop</span>
                    
                    <p class="text-sm text-gray-600 mb-6"><code>cy.request()</code> is executed by the browser runner. While convenient within a UI test, it carries the overhead of the Cypress proxy and event loop. It is not designed for high-volume data setup.</p>
                    
                    <div class="bg-gray-100 p-4 rounded-xl text-gray-700 font-mono text-[10px] overflow-x-auto">
                        <span class="text-blue-600">cy</span>.request({<br/>
                        &nbsp;&nbsp;method: <span class="text-green-600">'GET'</span>,<br/>
                        &nbsp;&nbsp;url: <span class="text-green-600">'/user/repos'</span>,<br/>
                        &nbsp;&nbsp;headers: { Authorization: <span class="text-green-600">'token...'</span> }<br/>
                        }).then((resp) => {<br/>
                        &nbsp;&nbsp;expect(resp.status).to.eq(200)<br/>
                        })
                    </div>

                    <ul class="mt-4 space-y-2 text-xs text-gray-600">
                        <li class="flex gap-2">🐢 <strong>Speed:</strong> Slower than Node-based fetch due to proxying.</li>
                        <li class="flex gap-2">🔗 <strong>Chaining:</strong> Must handle async values via <code>.then()</code> or aliases, not standard await.</li>
                    </ul>
                </div>

            </div>
        </div>`,

  page17: `
        <div class="max-w-4xl">
            <h2 class="text-4xl font-black text-gray-900 mb-2">CI & Infrastructure</h2>
            <p class="text-gray-500 mb-10">Running at scale: Docker containers, shards, and cloud grids.</p>
            
            <div class="space-y-12">
                <!-- Docker & Basics -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white p-6 rounded-2xl border shadow-sm">
                        <h4 class="font-bold text-gray-800 mb-3">🐳 Docker Containers</h4>
                        <div class="space-y-4 text-xs text-gray-600">
                            <div>
                                <p class="font-bold text-indigo-600">cypress/included</p>
                                <p>Pre-installed with Cypress, Chrome, Firefox, and Node. Plug-and-play but large.</p>
                            </div>
                            <div>
                                <p class="font-bold text-rose-600">mcr.microsoft.com/playwright</p>
                                <p>Optimized image. Contains all browser binaries (Chromium, WebKit, Firefox) + dependencies. Updated monthly.</p>
                            </div>
                        </div>
                    </div>
                     <div class="bg-white p-6 rounded-2xl border shadow-sm">
                        <h4 class="font-bold text-gray-800 mb-3">🧩 Parallelization Strategy</h4>
                        <ul class="space-y-3 text-xs text-gray-600">
                            <li class="flex justify-between items-center border-b pb-2">
                                <span><strong>Cypress:</strong> Paid Cloud</span>
                                <span class="bg-red-100 text-red-700 px-2 py-1 rounded text-[9px]">$$$</span>
                            </li>
                             <li class="flex justify-between items-center border-b pb-2">
                                <span><strong>Playwright:</strong> CI Sharding</span>
                                <span class="bg-green-100 text-green-700 px-2 py-1 rounded text-[9px]">FREE</span>
                            </li>
                             <li class="flex justify-between items-center">
                                <span><strong>Selenium Grid:</strong> Supported?</span>
                                <span class="text-gray-400">Both (via wrappers)</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Deep Dive: Sharding -->
                <div class="bg-slate-900 text-white p-8 rounded-3xl">
                    <h3 class="font-bold text-xl mb-6 flex items-center gap-3">
                        <span class="bg-rose-600 text-[10px] px-2 py-1 rounded">PLAYWRIGHT EXCLUSIVE</span>
                        Zero-Config Sharding
                    </h3>
                    <p class="text-sm text-gray-300 mb-6">Playwright can split your test suite into chunks based on the remainder of the modulo operator. This means you can spin up 10 GitHub Action runners and run 1/10th of the suite on each <strong>without a central server</strong>.</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-xs">
                         <div class="bg-slate-800 p-4 rounded-xl">
                            <p class="text-gray-400 mb-2">// Runner 1</p>
                            <code class="text-green-400">npx playwright test --shard=1/3</code>
                        </div>
                        <div class="bg-slate-800 p-4 rounded-xl">
                            <p class="text-gray-400 mb-2">// Runner 2</p>
                            <code class="text-green-400">npx playwright test --shard=2/3</code>
                        </div>
                    </div>
                </div>
            </div>
        </div>`,

  page18: `
        <div class="max-w-4xl">
            <h2 class="text-4xl font-black text-gray-900 mb-2">Reports & Analysis</h2>
            <p class="text-gray-500 mb-10">Turning results into evidence: Standard formats and custom reporters.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                
                <!-- Built-in -->
                <div class="space-y-6">
                    <h3 class="font-bold text-xl text-gray-800 border-b pb-2">Built-in Capabilities</h3>
                    
                    <div class="card-detailed border-l-4 border-indigo-500">
                        <h4 class="font-bold text-indigo-600 text-sm mb-2">Cypress (Mocha)</h4>
                        <p class="text-xs text-gray-600 mb-3">Defaults to terminal output (spec reporter). For HTML, you must install <code>mochawesome</code> and merge JSON files post-run.</p>
                        <div class="flex gap-2">
                             <span class="bg-gray-100 text-gray-500 px-2 py-1 rounded text-[9px]">Terminal</span>
                             <span class="bg-gray-100 text-gray-500 px-2 py-1 rounded text-[9px]">JUnit</span>
                        </div>
                    </div>

                    <div class="card-detailed border-l-4 border-rose-500">
                        <h4 class="font-bold text-rose-600 text-sm mb-2">Playwright HTML</h4>
                        <p class="text-xs text-gray-600 mb-3">Generates a fully search-able, filter-able, single-file HTML report containing all traces, videos, and screenshots. No plugins needed.</p>
                        <div class="flex gap-2">
                             <span class="bg-rose-100 text-rose-700 px-2 py-1 rounded text-[9px]">HTML (Native)</span>
                             <span class="bg-gray-100 text-gray-500 px-2 py-1 rounded text-[9px]">JSON/JUnit</span>
                             <span class="bg-gray-100 text-gray-500 px-2 py-1 rounded text-[9px]">GitHub Annotations</span>
                        </div>
                    </div>
                </div>

                <!-- Custom / SaaS -->
                <div class="space-y-6">
                    <h3 class="font-bold text-xl text-gray-800 border-b pb-2">Advanced / SaaS</h3>
                    
                     <div class="bg-white p-6 rounded-2xl border shadow-sm">
                        <h4 class="font-bold text-gray-800 mb-2">Allure Report</h4>
                        <p class="text-[10px] text-gray-500 mb-4">The industry standard for historical trending.</p>
                        <div class="space-y-2 text-xs">
                            <div class="flex justify-between">
                                <span>Cypress Support</span>
                                <span class="text-green-600 font-bold">✅ via Plugin</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Playwright Support</span>
                                <span class="text-green-600 font-bold">✅ via Plugin</span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                        <h4 class="font-bold text-indigo-700 mb-2">Cypress Cloud</h4>
                        <p class="text-[10px] text-gray-600 mb-2">The distinct advantage. If you pay, you get:</p>
                        <ul class="list-disc pl-4 text-[10px] text-gray-600 space-y-1">
                            <li>Flake detection & burnout analysis.</li>
                            <li>Branch vs. Branch performance.</li>
                            <li>Test Replay (Server-side time travel).</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`,

  "ai-strategist": `
        <div class="max-w-3xl">
            <h2 class="text-4xl font-black text-gray-900 mb-2">Gemini Strategy Lab</h2>
            <p class="text-gray-500 mb-8 italic text-sm">"Consult with the AI Architect to refine your organizational testing strategy."</p>
            <div class="bg-white p-8 rounded-3xl shadow-2xl border border-indigo-50 space-y-6">
                <div>
                    <label class="block text-[10px] font-black text-gray-400 uppercase mb-2">Project Constraints & Stack</label>
                    <textarea id="ai-input" class="w-full p-4 border rounded-2xl h-40 text-sm focus:ring-4 focus:ring-indigo-100 outline-none transition-all" placeholder="e.g. We are a Java-heavy enterprise moving to a React micro-frontend architecture. We need to run 500 tests in under 10 mins on GitHub Actions. Suggest a stack."></textarea>
                </div>
                <button id="ai-btn" class="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl hover:bg-indigo-700 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2">
                    ✨ GENERATE ARCHITECTURAL REPORT
                </button>
            </div>
            <div id="ai-response" class="mt-12 p-8 bg-slate-50 rounded-3xl border min-h-[300px] text-sm text-slate-700 leading-relaxed prose max-w-none">
                <p class="text-slate-400 italic">Waiting for strategy request...</p>
            </div>
        </div>`,
};
