import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface AddAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AddAgentDialog = ({ open, onOpenChange }: AddAgentDialogProps) => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Agent Added",
      description: "New agent has been successfully onboarded.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Agent</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="agent-name">Full Name</Label>
              <Input id="agent-name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="agent-phone">Phone Number</Label>
              <Input id="agent-phone" placeholder="08012345678" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="agent-email">Email</Label>
            <Input id="agent-email" type="email" placeholder="john@example.com" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="agent-branch">Assigned Branch</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select branch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="abeokuta">Abeokuta Main</SelectItem>
                  <SelectItem value="ibadan">Ibadan Branch</SelectItem>
                  <SelectItem value="lagos">Lagos Central</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="agent-role">Role</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Sales Agent</SelectItem>
                  <SelectItem value="collection">Collection Agent</SelectItem>
                  <SelectItem value="supervisor">Supervisor</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="agent-address">Address</Label>
            <Input id="agent-address" placeholder="123 Main St, City" />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Add Agent</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
