defmodule Formic.Repo.Migrations.AddBinaryId do
  use Ecto.Migration

  def change do
    alter table(:forms) do
      add :binary_id, :uuid
    end
  end
end
