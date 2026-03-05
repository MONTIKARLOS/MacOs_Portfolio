import WindowControls from "#components/WindowControls.jsx";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";

const ImageWindowContent = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <p>{name}</p>
            </div>

            <div className="preview">
                {imageUrl ? (
                    <img src={imageUrl} alt={name} />
                ) : null}
            </div>
        </>
    );
};

const ImageFileWindow = WindowWrapper(ImageWindowContent, "imgfile");
export default ImageFileWindow;
