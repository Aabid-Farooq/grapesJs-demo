import * as React from "react";
import { AssetsResultProps, useEditor } from "@grapesjs/react";
import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import type { Asset } from "grapesjs";
import { BTN_CLS } from "./common";

export type CustomAssetManagerProps = Pick<
  AssetsResultProps,
  "assets" | "close" | "select"
>;

export default function CustomAssetManager({
  assets,
  select,
}: CustomAssetManagerProps) {
  const editor = useEditor();

  const remove = (asset: Asset) => {
    editor.Assets.remove(asset);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files?.[0]);
    const file = event.target.files?.[0];
    editor.Assets.add({
      type: "image",
      src: URL.createObjectURL(file),
    });
    event.target.value = null;
  };

  return (
    <div className="grid grid-cols-3 gap-2 pr-2">
      {assets.map((asset) => (
        <div
          key={asset.getSrc()}
          className="relative group rounded overflow-hidden"
        >
          <img className="display-block" src={asset.getSrc()} />
          <div className="flex flex-col items-center justify-end absolute top-0 left-0 w-full h-full p-5 bg-zinc-700/75 group-hover:opacity-100 opacity-0 transition-opacity">
            <button
              type="button"
              className={BTN_CLS}
              onClick={() => select(asset, true)}
            >
              Select
            </button>
            <button
              type="button"
              className="absolute top-2 right-2"
              onClick={() => remove(asset)}
            >
              <Icon size={1} path={mdiClose} />
            </button>
          </div>
        </div>
      ))}
      {/* <form onSubmit={(event)=>handleAddFile(event.target.value)}> */}
      <input
        // className="hidden"
        id="fileInput"
        type="file"
        onChange={handleFileChange}
        required
      />
      {/* <button type="submit">Submit</button> */}
      {/* </form> */}
    </div>
  );
}
