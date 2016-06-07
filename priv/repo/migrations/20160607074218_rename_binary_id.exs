defmodule Formic.Repo.Migrations.RenameBinaryId do
  use Ecto.Migration

  def change do
    rename table(:forms), :binary_id, to: :uuid
  end
end
