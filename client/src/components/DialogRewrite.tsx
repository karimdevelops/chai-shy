import { useState } from "react";
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from "./ui/dialog"

export function DialogRewrite() {
    const [open, setOpen] = useState(true);

    return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Important Notice</DialogTitle>
          <DialogDescription>   Sorry but I am currently rewriting in tailwindcss, so you cannot see the site in its best form yet.
          
         </DialogDescription>
        </DialogHeader>
       <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="bg-app-primary text-app-background">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>  )
}
