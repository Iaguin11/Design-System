import { User } from "phosphor-react";
import { AvatarContainer, AvatarFallback, AvatarImage, } from "./style";
import { ComponentProps } from "react";

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps){
  return(
    <AvatarContainer>
      <AvatarImage {...props}/>

      <AvatarFallback >
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
Avatar.displayName = 'Avatar'