import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AddBrandDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AddBrandDialog = ({ open, onOpenChange }: AddBrandDialogProps) => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Brand Added",
      description: "New brand has been successfully created.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Brand</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="brand-name">Brand Name</Label>
            <Input id="brand-name" placeholder="Samsung" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input id="website" type="url" placeholder="https://www.samsung.com" />
          </div>

          <div className="space-y-2">
            <Label>Brand Logo</Label>
            <div className="border-2 border-dashed rounded-lg p-6">
              <input type="file" accept="image/*" className="hidden" id="logo-upload" />
              <label htmlFor="logo-upload" className="cursor-pointer">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <Upload className="h-8 w-8" />
                  <p className="text-sm">Click to upload logo</p>
                </div>
              </label>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Add Brand</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
