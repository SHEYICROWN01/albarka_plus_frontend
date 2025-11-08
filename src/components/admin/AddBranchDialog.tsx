import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface AddBranchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AddBranchDialog = ({ open, onOpenChange }: AddBranchDialogProps) => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Branch Added",
      description: "New branch has been successfully created.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Branch</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="branch-name">Branch Name</Label>
            <Input id="branch-name" placeholder="Abeokuta Main" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="branch-address">Full Address</Label>
            <Textarea id="branch-address" placeholder="Omida Shopping Complex, Abeokuta" rows={2} required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="branch-phone">Phone</Label>
              <Input id="branch-phone" placeholder="08012345678" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="branch-email">Email</Label>
              <Input id="branch-email" type="email" placeholder="branch@albarka.com" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="branch-manager">Branch Manager</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Assign manager" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manager1">Manager Adebayo</SelectItem>
                <SelectItem value="manager2">Manager Chinwe</SelectItem>
                <SelectItem value="manager3">Manager Tunde</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Add Branch</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
