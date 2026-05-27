# Implementation Plan - Steve AI Assistant (Frontend Concept)

This plan outlines the creation of a frontend-only conceptual demonstration for "Steve", an AI assistant. Due to browser security and platform limitations, a web application cannot natively control system-level phone functions or operate fully offline without being installed as a PWA with local models. This project will focus on the UI/UX experience and simulated functionality.

## Scope Summary
- **Steve Interface**: A voice-centric UI that responds to the wake word "Steve" (simulated via UI interaction or Web Speech API).
- **Offline Mode Simulation**: A toggle to show how the app behaves/buffers when connectivity is lost, emphasizing local-first privacy.
- **Parental Controls Dashboard**: A section to manage data sharing preferences and "Privacy Guard" settings.
- **Alert System**: Visual and auditory feedback when the assistant is "listening" or "alerted".
- **Local Persistence**: Using `localStorage` to save user preferences and privacy settings.

## Non-Goals
- Real system-level phone control (e.g., hardware volume, actual phone calls, system settings).
- Genuine offline AI model processing (requires large WASM bundles outside this scope).
- Actual data encryption/security (conceptual UI only).

## Assumptions
- The application will run in a modern web browser.
- Voice features depend on the browser's `Web Speech API` (SpeechRecognition).
- "Steve" wake word detection will be a button-triggered simulation or a simple "start listening" mode.

## Affected Areas
- **Frontend (React)**: Main interface, voice simulation, and navigation.
- **State Management**: React hooks and `localStorage` for privacy/parental settings.
- **Components**: UI for the assistant's "Orb", Settings, and Activity Log.

## Ordered Phases

### Phase 1: Core Layout & Steve Orb (frontend_engineer)
- Create a futuristic, voice-centric landing page.
- Implement the "Steve Orb" – a central animated component that reacts to "voice" input.
- Add a "Wake Steve" button to simulate the "Call it Steve" requirement.

### Phase 2: Privacy & Parental Controls (frontend_engineer)
- Build a "Security & Parental Control" view.
- Implement toggles for "Data Sharing" (disabled by default as per request).
- Add "Privacy Guard" logs showing "Blocked Data Access" (simulated).

### Phase 3: Offline Simulation & Alert Logic (quick_fix_engineer)
- Implement an "Offline Mode" switch in the UI.
- Update the assistant's responses to change when "Offline" (e.g., "Running on local core").
- Add "Phone Alert" simulation (visual flashing/beeping) when Steve is triggered.

### Phase 4: Refinement & Data Persistence (frontend_engineer)
- Connect all settings to `localStorage`.
- Finalize animations for the "Steve" persona.
- Ensure responsive design for mobile-first viewing.

## Sequencing Constraints
- Phase 1 must be completed before Phase 3 (Alert Logic depends on the Orb).
- Phase 2 and 3 can be worked on concurrently.

## Downstream Ownership
- **frontend_engineer**: Primary builder for the UI, state, and voice simulation.
- **quick_fix_engineer**: Specialized UI tweaks for alerts and offline status indicators.
