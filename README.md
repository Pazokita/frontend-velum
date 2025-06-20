# 🗺️ Velum – Frontend

**Velum** est une application mobile d’exploration de cartes historiques superposées à des cartes modernes.
Cette app React Native permet à l’utilisateur de visualiser l’évolution d’un lieu en superposant une carte ancienne géoréférencée à une carte interactive moderne (OpenStreetMap).

---

## 📌 Objectif actuel – Phase 3 (MVP interactif)

✅ Initialiser le projet avec Expo + TypeScript

✅ Afficher une MapView centrée sur une zone donnée

✅ Superposer une image géoréférencée historique

✅ Contrôler son opacité avec un slider

✅ Permettre la sélection de la carte via un picker (dans une FlatList ou menu)

✅ Préparer une architecture modulaire

🔄 En cours : intégration du backend Go (/maps) pour charger dynamiquement les cartes

🔜 Prochaine étape : recherche sémantique avec IA (FastAPI)

---

## ⚙️ Stack

- [Expo](https://expo.dev/) (React Native)
- `react-native-maps` pour la carte
- `@react-native-community/slider` pour le curseur
- Architecture modulaire par feature `(src/features/maps/)`

---

## 📂 Structure du projet
```bash
frontend-velum/
├── App.tsx
└── src/
    ├── features/
    │   └── maps/
    │       ├── components/
    │       │   ├── OpacitySlider.tsx
    │       │   ├── MapOverlay.tsx
    │       │   └── MapPicker.tsx
    │       ├── screens/
    │       │   ├── MapListScreen.tsx
    │       │   └── MapDetailScreen.tsx
    │       ├── services/
    │       │   ├── mapService.ts
    │       │   ├── useMaps.ts
    │       │   └── useMapById.ts
    │       └── types/
    │           └── index.ts
    └── navigation/
        └── AppNavigator.tsx

```

## 🚀 Lancer l'application

```bash
npm install
npx expo start
```
Ouvrir dans Expo Go ou simulateur

## 🔍 Fonctionnalités MVP

	🗺️ Carte moderne interactive (OpenStreetMap)

	🖼️ Superposition d’une carte ancienne géoréférencée

	🎚️ Curseur d’opacité fluide

	🧭 Sélection d’une carte parmi plusieurs disponibles

	🔄 Recentrage dynamique en fonction de la carte sélectionnée

	🔜 Intégration recherche IA (/semantic-search)

## 👩‍💻 Auteure

Amalia Maturana – https://www.amaliamaturana.com
Design clair, code modulaire et passion pour l’histoire ❤️

## 📜 Licence

MIT – Open source et libre d’usage.