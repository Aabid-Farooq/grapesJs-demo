import GjsEditor, { AssetsProvider, Canvas } from "@grapesjs/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import grapesjs, { Editor, EditorConfig } from "grapesjs";
import plugin from "grapesjs-blocks-basic";
import "./App.css";
import CustomAssetManager from "./components/CustomAssetManager";
import RightSidebar from "./components/RightSidebar";
import Topbar from "./components/TopBar";
import { MAIN_BORDER_COLOR } from "./components/common";
import {
  FEATURED_POSTS,
  HOMEPAGE,
  PRODUCT_CARDS,
} from "./constants/appConstants";
const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const gjsOptions: EditorConfig = {
  height: "100vh",
  storageManager: false,
  undoManager: { trackSelection: false },
  selectorManager: { componentFirst: true },
  plugins: [
    (editor) =>
      plugin(editor, {
        blocks: [
          "column1",
          "column2",
          "column3",
          "column3-7",
          "text",
          "link",
          "map",
        ],
      }),
  ],
  blockManager: {
    blocks: [
      {
        id: FEATURED_POSTS.id,
        label: FEATURED_POSTS.label,
        media: FEATURED_POSTS.media,
        content: FEATURED_POSTS.content,
        category: FEATURED_POSTS.category,
      },
      {
        id: PRODUCT_CARDS.id,
        label: PRODUCT_CARDS.label,
        media: PRODUCT_CARDS.media,
        content: PRODUCT_CARDS.content,
        category: PRODUCT_CARDS.category,
      },
    ],
  },
  projectData: {
    assets: [
      "https://via.placeholder.com/350x250/78c5d6/fff",
      "https://via.placeholder.com/350x250/459ba8/fff",
      "https://via.placeholder.com/350x250/79c267/fff",
      "https://via.placeholder.com/350x250/c5d647/fff",
      "https://via.placeholder.com/350x250/f28c33/fff",
    ],
    pages: [
      {
        name: HOMEPAGE.name,
        component: HOMEPAGE.component,
      },
    ],
  },
};

function App() {
  const onEditor = (editor: Editor) => {
    console.log("Editor loaded", { editor });
  };

  return (
    <ThemeProvider theme={theme}>
      <GjsEditor
        className="gjs-custom-editor text-white bg-slate-900"
        grapesjs={grapesjs}
        grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
        options={gjsOptions}
        onEditor={onEditor}
      >
        <div className={`flex h-full border-t ${MAIN_BORDER_COLOR}`}>
          <div className="gjs-column-m flex flex-col flex-grow">
            <Topbar className="min-h-[48px]" />
            <Canvas className="flex-grow gjs-custom-editor-canvas" />
          </div>
          <RightSidebar
            className={`gjs-column-r w-[300px] border-l ${MAIN_BORDER_COLOR}`}
          />
        </div>
        <AssetsProvider>
          {({ assets, select, close, Container }) => (
            <Container>
              <CustomAssetManager
                assets={assets}
                select={select}
                close={close}
              />
            </Container>
          )}
        </AssetsProvider>
      </GjsEditor>
    </ThemeProvider>
  );
}

export default App;
