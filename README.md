# 🗺️ Velum – Frontend

**Velum** est une application mobile d’exploration de cartes historiques superposées à des cartes modernes.  
Cette app React Native affiche une **carte moderne**, une **image géoréférencée ancienne** superposée, et un **slider d’opacité**.

---

## 📌 Objectif de la Phase 1

- ✅ Initialiser le projet Expo avec TypeScript
- ✅ Afficher une `MapView` centrée sur Paris
- ✅ Superposer une image (carte ancienne)
- ✅ Contrôler son opacité avec un slider
- ✅ Préparer l’appel vers le backend `/maps`

---

## ⚙️ Stack

- [Expo](https://expo.dev/) (React Native)
- `react-native-maps` pour la carte
- `@react-native-community/slider` pour le curseur
- Architecture modulaire par dossiers `src/`

---

## 📂 Structure du projet
```bash
frontend-velum/
├── App.tsx
└── src/
├── components/
│   └── OpacitySlider.tsx
├── screens/
│   └── MapScreen.tsx
└── services/
└── mapService.ts
```

## 🚀 Lancer l'application

```bash
npx expo start
```
Ouvrir dans Expo Go ou simulateur

## 🔍 Fonctionnalités

	•	📍 Affiche Paris en carte interactive
	•	🖼️ Superpose une image ancienne
	•	🎚️ Contrôle l’opacité via slider
	•	🔜 Prochaine étape : chargement dynamique via API /maps

## 👩‍💻 Auteure

Amalia Maturana – https://www.amaliamaturana.com
Design clair, code modulaire et passion pour l’histoire ❤️

## 📜 Licence

MIT – Open source et libre d’usage.