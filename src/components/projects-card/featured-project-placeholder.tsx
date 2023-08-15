import { forwardRef } from "react";
import { FeaturedProjectPlaceholderProps } from "./interface";

// eslint-disable-next-line no-empty-pattern
const FeaturedProjectPlaceholder = forwardRef<
    HTMLDivElement,
    FeaturedProjectPlaceholderProps
>(({ backgroundImg }, ref) => {
    const backgroundImgSmall = backgroundImg.replace(/\.(?=[^.]*$)/, "-small.");

    return (
        <div
            ref={ref}
            style={{
                backgroundImage: `url(${backgroundImgSmall})`,
                backgroundColor: "red",
                opacity: "0",
            }}
        >
            <div
                style={{
                    aspectRatio: "1/1.25",
                }}
            ></div>
        </div>
    );
});

export default FeaturedProjectPlaceholder;
