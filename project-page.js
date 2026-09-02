const projects = {
  "vessel-detection": { title: "Vessel Detection", type: "Research Project", domain: "Maritime · Defence", source: "Sentinel-1 SAR (IW, VV+VH)", platform: "Custom WebGIS", tags: ["SAR", "Object Detection"], overview: "A dummy project overview for an end-to-end workflow that turns Sentinel-1 SAR scenes into an interactive vessel detection experience.", metrics: [["Detected vessels", "386"], ["Average vessel length", "155.6 m"], ["Detection density", "0.61 ves./km²"], ["Average confidence", "0.78"]] },
  "oil-spill": { title: "Oil Spill Segmentation", type: "Research Project", domain: "Marine Environment", source: "Sentinel-1 SAR", platform: "GeoAI Analysis Workflow", tags: ["SAR", "Segmentation", "Oil Spill"], overview: "A dummy project overview for mapping potential oil-spill areas from SAR imagery and reviewing segmentation results spatially.", metrics: [["Detected patches", "142"], ["Total spill area", "18.4 km²"], ["Mean confidence", "0.82"], ["Scenes analysed", "24"]] },
  "urban-heat": { title: "Urban Heat Island Analytics", type: "Research Project", domain: "Climate · Cities", source: "Landsat Collection 2 Level-2 Thermal", platform: "Google Earth Engine", tags: ["Google Earth Engine", "LST", "Urban Heat Island"], overview: "A dummy project overview for analysing land-surface temperature, urban heat patterns and seasonal change across a city.", metrics: [["Mean LST", "36.8°C"], ["Heat island delta", "4.2°C"], ["Areas analysed", "18"], ["Time range", "5 years"]] },
  "crop-classification": { title: "Crop Classification", type: "Research Project", domain: "Agriculture", source: "Multi-Temporal SAR · Sentinel-1 · NISAR", platform: "Custom WebGIS", tags: ["SAR", "Sentinel-1", "NISAR", "Classification"], overview: "Implemented a crop type classification workflow using multi-temporal Sentinel-1 and NISAR SAR imagery by integrating field survey data for training and validation, extracting temporal backscatter signatures, and training machine-learning models for multi-class crop classification, and integrating the results into an interactive WebGIS application." }
};
const pathParts = location.pathname.split("/").filter(Boolean);
const route = pathParts.at(-1) === "index.html" ? pathParts.at(-2) : pathParts.at(-1);
const key = projects[route] ? route : "vessel-detection";
const p = projects[key];
p.image = { "vessel-detection": "vessel_detection.png", "oil-spill": "oil_spill.png", "urban-heat": "urban_heat.png", "crop-classification": "crop_condition.png" }[key];
p.video = { "vessel-detection": "Vessel_Detection_Sentinel1_EndCard_Updated.mp4", "oil-spill": "Oil_Spill_Segmentation_Updated.mp4", "crop-classification": "Crop_Classification_Sentinel1_NISAR_Updated.mp4", "urban-heat": "Urban_Heat_EndCard_Updated.mp4" }[key];
const svg = path => `<svg viewBox="0 0 24 24" aria-hidden="true" style="width:17px;height:17px;vertical-align:-3px;margin-right:7px;fill:none;stroke:#62e47b;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round"><path d="${path}"/></svg>`;
const icons = { overview: svg("M6 3h9l3 3v15H6z M15 3v4h4 M9 12h6 M9 16h6"), capabilities: svg("M9 3v4 M15 3v4 M7 9h10v10H7z M10 13h4 M12 11v4"), info: svg("M12 17v-5 M12 8h.01 M4 12a8 8 0 1 0 16 0a8 8 0 0 0-16 0"), stack: svg("M5 4h14v5H5z M5 15h14v5H5z M9 9v6 M15 9v6"), scene: svg("M4 5h16v14H4z M4 15l5-5l3 3l3-4l5 6"), filter: svg("M4 7h16 M7 12h10 M10 17h4 M8 5v4 M16 10v4 M12 15v4"), globe: svg("M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18 M3 12h18 M12 3a14 14 0 0 1 0 18"), layers: svg("m12 3 8 4-8 4-8-4 8-4 M4 12l8 4 8-4 M4 16l8 4 8-4"), export: svg("M12 3v12 M8 11l4 4 4-4 M5 19h14"), brain: svg("M9 4a3 3 0 0 0-5 3a3 3 0 0 0 1 5a3 3 0 0 0 3 5 M15 4a3 3 0 0 1 5 3a3 3 0 0 1-1 5a3 3 0 0 1-3 5 M9 4v14 M15 4v14 M9 11h6") };
const featureIcons = [icons.capabilities, icons.scene, icons.filter, icons.globe, icons.layers, icons.export];
const stackIcons = [icons.brain, icons.globe, icons.stack, icons.scene, icons.layers];
if (key === "vessel-detection") Object.assign(p, {
  title: "Vessel Detection",
  lead: "Detecting vessels in Sentinel-1 SAR imagery with oriented bounding boxes and an interactive map.",
  source: "Sentinel-1 SAR · Mode: IW VV Polarization",
  tags: ["SAR", "Object Detection"],
  overview: "Developed a vessel detection workflow using Sentinel-1 SAR imagery, combining threshold-based candidate generation, AIS-assisted label validation, deep-learning based object detection, and WebGIS integration for spatial review, analysis, and dissemination of vessel detections.",
  capabilities: [["OBB Vessel Detection", "Orientation-aware vessel localization in Sentinel-1 SAR imagery."], ["SAR Scene Exploration", "Browse acquisitions with scene metadata and imagery context."], ["Detection Filtering", "Filter by confidence, size, date and scene for precise insights."], ["Spatial Analytics", "Vessel counts, density, size distribution and detection patterns."], ["WebGIS Visualization", "Interactive map exploration of detections and SAR scenes."], ["Data Export", "Export detections to GeoJSON, CSV and GIS-ready formats."]],
  techStack: [["AI / ML", "PyTorch · Ultralytics · OpenCV · NumPy"], ["Geospatial", "GDAL · Rasterio · GeoPandas · Shapely · PostGIS"], ["Backend", "Python · FastAPI"], ["Frontend / WebGIS", "React · TypeScript · OpenLayers"], ["Data", "Sentinel-1 SAR"]]
});
if (key === "oil-spill") Object.assign(p, {
  title: "Oil Spill Segmentation",
  lead: "Oil spill detection and mapping from SAR imagery using deep-learning segmentation.",
  overview: "Developed a SAR-based oil spill mapping framework using Sentinel-1 imagery, covering dark-target extraction, manual creation and validation of segmentation masks through SAR interpretation and SkyTruth data as a reference, deep-learning segmentation model development, and WebGIS integration of spill extents with acquisition-time environmental context layers.",
  capabilities: [["Oil Slick Segmentation", "Detect and map oil slicks as georeferenced polygons."], ["Slick-Level Analysis", "Explore slick area, confidence, geometry, and SAR signature."], ["Environmental Conditions", "Review wind and wave conditions at acquisition time."], ["Coastal & Marine Context", "Analyze distance to coast, water depth, and protected-area proximity."], ["Multi-Date Analysis", "Compare detections and spill statistics across multiple acquisitions."], ["Interactive Map Exploration", "Explore SAR imagery, detections, environmental layers, and analytical results."]]
});
if (key === "urban-heat") Object.assign(p, {
  title: "Urban Heat Island Analytics",
  lead: "Land Surface Temperature Analysis & Urban Heat Island Mapping",
  source: "Landsat Collection 2 Level-2 Thermal",
  tags: ["Google Earth Engine", "LST", "Urban Heat Island"],
  overview: "Built an urban heat analytics solution using Landsat Collection 2 Level-2 thermal imagery, Dynamic World land cover, and Global Urban Boundaries by deriving Land Surface Temperature, quantifying Urban Heat Island intensity, analyzing urban heat zones, prioritizing mitigation areas, integrating population exposure, and visualizing results through a WebGIS application.",
  capabilities: [["Urban Heat Mapping", "Generate land surface temperature and UHI intensity maps."], ["Heat Zone Analysis", "Classify urban thermal patterns using Jenks Natural Breaks."], ["Land Cover Analysis", "Evaluate thermal characteristics across Dynamic World classes."], ["Population Exposure", "Estimate population exposure across urban heat zones."], ["Heat Mitigation Planning", "Identify priority areas for heat mitigation interventions."], ["Interactive Analytics", "Explore heat maps, statistics, and geospatial outputs through WebGIS."]],
  techStack: [["Remote Sensing", "Landsat Collection 2 · Dynamic World"], ["Geospatial Analytics", "Google Earth Engine · Jenks Natural Breaks"], ["Geospatial", "GeoPandas · Rasterio · WorldPop"], ["Frontend / WebGIS", "React · TypeScript · OpenLayers"]]
});
if (key === "crop-classification") Object.assign(p, {
  title: "Crop Classification",
  capabilities: [["Crop Classification", "Explore mapped crop classes and their spatial distribution."], ["SAR Composite Comparison", "Compare early, mid, and late multi-temporal SAR observations."], ["Field Survey Points", "Explore surveyed crop locations with field labels and photographs."], ["Temporal Backscatter Profile", "Analyze SAR backscatter variation through time for selected locations."], ["Crop Area Analyzer", "Draw an area of interest and calculate crop-wise area and composition."], ["Selected Location NDVI", "Explore vegetation-index variation through time for a selected location."]]
});
const order = Object.keys(projects); const current = order.indexOf(key);
const prev = order[(current - 1 + order.length) % order.length]; const next = order[(current + 1) % order.length];
const stylesheet = document.createElement("link"); stylesheet.rel = "stylesheet"; stylesheet.href = location.pathname.includes("/projects/") ? "../../project-detail.css" : "project-detail.css"; document.head.append(stylesheet);
const detailOverrides = document.createElement("style"); detailOverrides.textContent = ".overview-info{gap:18px!important;margin-top:18px!important;grid-template-columns:1fr 1fr!important}.wide-panel{margin-top:18px!important}.overview-info h2,.wide-panel h2{font-size:16px!important}.overview-info h2::first-letter,.wide-panel h2::first-letter{color:inherit!important}.wide-panel p{font-size:14px!important;line-height:1.7!important}.project-info{grid-template-columns:1fr!important;gap:0!important}.project-info>div{display:grid!important;grid-template-columns:24px minmax(0,1fr)!important;column-gap:9px!important;align-items:start!important;border-right:0!important;border-bottom:1px solid #284153!important;padding:8px 0!important}.project-info>div:last-child,.overview-info .feature:last-child{border-bottom:0!important}.project-info>div>strong{grid-column:2;font-size:13px!important}.project-info>div>small{grid-column:2;margin:3px 0 0!important;font-size:12px!important;line-height:1.5!important}.project-info>div>i{grid-column:1;grid-row:1 / span 2;color:#62e47b;font-style:normal;font-size:15px}.overview-info .features{grid-template-columns:1fr!important}.overview-info .feature{border-right:0!important;border-bottom:1px solid #284153!important;padding:8px 0!important}.feature strong{font-size:13px!important}.feature small{font-size:12px!important;line-height:1.5!important}.feature>b{font-size:18px!important}.live-stage{height:300px!important;display:grid!important;grid-template-columns:minmax(0,1fr) 155px!important;gap:8px!important}.live-stage>img{grid-column:1!important}.live-stage .demo-inspector{grid-column:2;display:block;border:1px solid #284153;border-radius:6px;padding:11px;background:#07141e;color:#aebdca;font-size:10px}.demo-inspector strong,.demo-inspector small{display:block}.demo-inspector strong{color:#66e78b;font-size:11px;margin-bottom:11px}.demo-inspector small{margin:7px 0}.demo-inspector b{color:#f0f5f8;font-size:12px}.video-label,.video-controls{display:none!important}"; document.head.append(detailOverrides);
const thumbnailOnly = document.createElement("style"); thumbnailOnly.textContent = ".live-demo>header,.live-stage nav,.live-stage .demo-inspector,.live-stage .video-label,.live-stage .video-controls{display:none!important}.live-demo{padding:0!important}.live-stage{display:block!important;height:480px!important;padding:0!important;background:transparent!important}.live-stage>img{width:100%!important;height:100%!important;aspect-ratio:auto;object-fit:cover!important;border-radius:0!important}.live-stage:has(.video-wrap){height:auto!important}.live-stage .video-wrap{position:relative;width:100%;aspect-ratio:16/9;background:#000}.live-stage .video-wrap>video{width:100%!important;height:100%!important;object-fit:contain!important;border-radius:0!important;background:#000;display:block}.live-stage .video-play-btn{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:64px;height:64px;border-radius:50%;border:none;background:#69e98a;display:grid;place-items:center;cursor:pointer;box-shadow:0 4px 18px rgba(0,0,0,.45);transition:transform .15s,background .15s}.live-stage .video-play-btn:hover{background:#7dffa1;transform:translate(-50%,-50%) scale(1.06)}.live-stage .video-play-btn.hidden{display:none}@media(max-width:700px){.live-stage{height:260px!important}.live-stage .video-play-btn{width:52px;height:52px}}"; document.head.append(thumbnailOnly);
document.title = `${p.title} — GeoAI Portfolio`;
const nav = document.querySelector(".nav-links");
if (nav) nav.innerHTML = '<a href="../../index.html#top">Home</a><a class="active" href="../../index.html#projects">Projects</a><a href="../../index.html#skills">Skills</a><a href="../../index.html#resume">Resume</a><a href="../../index.html#contact">Contact</a>';
const tags = p.tags.map(t => `<span>${t}</span>`).join("");
const capabilityItems = p.capabilities ?? ["Interactive exploration", "Advanced filtering", "Spatial analytics", "Export & integration", "Map-first interface", "Repeatable workflow"].map(item => [item, "Dummy feature description for this project capability."]);
const displayCapabilities = capabilityItems;
const features = displayCapabilities.map(([title, description], i) => `<div class="feature"><b>${featureIcons[i % featureIcons.length]}</b><span><strong>${title}</strong><small>${description}</small></span></div>`).join("");
const stackItems = p.techStack ?? [["AI / ML", "PyTorch · OpenCV · Scikit-learn"], ["Geospatial", "GeoPandas · Rasterio · STAC"], ["Frontend", "React · TypeScript · OpenLayers"], ["Backend", "FastAPI · PostgreSQL · PostGIS"]];
const stack = stackItems.map(([name, tools], i) => `<div><b>${stackIcons[i % stackIcons.length]}</b><span><strong>${name}</strong><small>${tools}</small></span></div>`).join("");
const infoItems = key === "vessel-detection" ? [[icons.layers, "Satellite Data", "Sentinel-1 SAR · IW Mode · VV Polarization"], [icons.brain, "AI Method", "Deep Learning · Object Detection · Oriented Bounding Boxes"], [icons.globe, "Domain", "Maritime Monitoring · Vessel Intelligence"], [icons.capabilities, "Primary Task", "Vessel Detection"], [icons.layers, "Geospatial Output", "Georeferenced OBB Detections"], [icons.scene, "Application", "Interactive WebGIS · Spatial Analytics"]] : [[icons.layers, "Domain", p.domain], [icons.export, "Outputs", "Detections, analytics, WebGIS"], [icons.scene, "Data Source", p.source], [icons.stack, "Platform", p.platform], [icons.capabilities, "Primary Task", p.title], [icons.info, "Status", "Research / In Progress"]];
if (key === "oil-spill") infoItems.splice(0, infoItems.length,
  [icons.layers, "Satellite Data", "Sentinel-1 SAR"],
  [icons.globe, "Environmental Data", "Wind · Waves · Bathymetry · Marine Protected Areas"],
  [icons.brain, "AI Method", "Deep Learning · Semantic Segmentation"],
  [icons.capabilities, "Primary Task", "Marine Oil Slick Detection & Segmentation"],
  [icons.layers, "Geospatial Output", "Detected Slick Polygons · Area & Confidence Metrics"],
  [icons.scene, "Application", "Interactive WebGIS · Marine Context Analytics"]
);
if (key === "urban-heat") infoItems.splice(0, infoItems.length,
  [icons.layers, "Satellite Data", "Landsat Collection 2 Level-2 · Thermal"],
  [icons.globe, "Geospatial Data", "Dynamic World · Global Urban Boundaries · WorldPop"],
  [icons.brain, "Analysis Method", "Thermal Remote Sensing · Geospatial Analytics"],
  [icons.capabilities, "Primary Task", "Urban Heat Island Assessment"],
  [icons.layers, "Geospatial Output", "LST Maps · UHI Maps · Heat Zones · Mitigation Areas · Population Exposure"],
  [icons.stack, "Platform", "Google Earth Engine · Interactive WebGIS"]
);
if (key === "crop-classification") infoItems.splice(0, infoItems.length,
  [icons.layers, "Satellite Data", "Multi-Temporal SAR · Sentinel-1 · NISAR"],
  [icons.scene, "Field Data", "Crop Survey Points · Field Labels · Field Photographs"],
  [icons.brain, "AI Method", "Machine Learning · Multi-Class Crop Classification"],
  [icons.capabilities, "Primary Task", "Crop Type Mapping"],
  [icons.layers, "Geospatial Output", "Final Crop Classification · Crop Area Statistics"],
  [icons.globe, "Application", "Interactive WebGIS · Crop Analytics"]
);
const projectInfo = infoItems.map(([icon, label, value]) => `<div><i>${icon}</i><strong>${label}</strong><small>${value}</small></div>`).join("");
document.querySelector("#projectPage").innerHTML = `
  <a class="detail-back" href="../../index.html#projects">← Back</a>
  <h1>${p.title}</h1>
  <section class="live-demo"><header><span><b>●</b> LIVE DEMO</span><i></i><strong>${p.title}</strong><div><button>● Live</button><button>▱ Layers</button></div></header><div class="live-stage">${p.video ? `<div class="video-wrap"><video src="${p.video}" poster="../../images/${p.image}" controls preload="metadata"></video><button class="video-play-btn" aria-label="Play video"><svg viewBox="0 0 24 24" width="28" height="28"><path d="M8 5v14l11-7z" fill="#0b251b"/></svg></button></div>` : p.image ? `<img src="../../images/${p.image}" alt="${p.title} thumbnail">` : ""}<nav><button>⌖</button><button>▱</button><button>⊙</button><button>✎</button></nav><aside class="demo-inspector"><strong>Detection Overview</strong><small>Total Detections</small><b>12</b><small>Avg Confidence</small><b>0.87</b><small>Scenes Analysed</small><b>24</b><small>Updated</small><b>2024-05-12</b><button style="margin-top:10px;width:100%;border:1px solid #2d7750;border-radius:4px;background:#0b251b;color:#69e98a;padding:6px;font-size:10px">View Analysis →</button></aside><div class="video-label">Video demo coming soon</div><div class="video-controls"><b>▶</b><span>00:00 / 00:18</span><i><em></em></i><span>● Results</span><button>⌗</button></div></div></section>
  <section class="wide-panel"><h2>Overview</h2><p style="margin:0;color:#aebdca">${p.overview}</p></section>
  <section class="overview-info"><article><h2>Project Information</h2><div class="project-info">${projectInfo}</div></article><article><h2>Analytical Capabilities</h2><div class="features">${features}</div></article></section>
  <footer class="project-footer"><a href="../${prev}/index.html">← Previous project</a><span class="credits-info" tabindex="0" aria-label="Data & Credits"><b>ⓘ</b> Data &amp; Credits<div class="credits-tooltip">Original project implementation, visualizations, and portfolio content © 2026 Akula Poojitha.<br>Third-party datasets remain subject to their respective licenses and attribution requirements.</div></span><a href="../${next}/index.html">Next project →</a></footer>
  <footer class="site-footer">Designed &amp; developed by Akula Poojitha · © 2026</footer>`;
if (p.video) {
  const videoEl = document.querySelector(".video-wrap>video");
  const videoWrap = document.querySelector(".video-wrap");
  const playBtn = document.querySelector(".video-play-btn");
  videoEl.addEventListener("loadedmetadata", () => { videoWrap.style.aspectRatio = `${videoEl.videoWidth} / ${videoEl.videoHeight}`; });
  playBtn.addEventListener("click", () => videoEl.play());
  videoEl.addEventListener("play", () => playBtn.classList.add("hidden"));
  videoEl.addEventListener("pause", () => playBtn.classList.remove("hidden"));
  videoEl.addEventListener("ended", () => playBtn.classList.remove("hidden"));
}
